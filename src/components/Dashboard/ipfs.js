"use client";

const axios = require("axios");
import React, { useEffect, useState } from "react";
import {
  createArticleConfig,
  editArticleConfig,
} from "../../../utils/axiosConfig";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { ipfsAddress } from "../../../utils/constants";

export default function IPFSForm({
  passportId,
  account,
  contract,
  selectedArticle,
  getArticles,
  deselectArticle,
  selectParent,
}) {
  const [cid, setCid] = useState("");
  const [selectedArticleCid, setSelectedArticleCid] = useState("");
  const [article, setArticle] = useState({ article: "", oldVersion: null });
  const [isLoading, setIsLoading] = useState(false);

  const getArticle = async (requestedCid) => {
    setIsLoading(true);
    if (requestedCid) {
      const response = await axios.get(`${ipfsAddress}/${requestedCid}`);
      setIsLoading(false);
      if (response) {
        setArticle({
          article: response.data.article,
          oldVersion: response.data.oldVersion,
        });
      }
    }
  };

  useEffect(() => {
    if (selectedArticle.article) {
      setCid(selectedArticle.article);
      setSelectedArticleCid(selectedArticle.article);
    }
  }, [selectedArticle.article]);

  useEffect(() => {
    let requestedCid = cid || selectedArticle.article;
    if (requestedCid) {
      getArticle(requestedCid);
    }
  }, [selectedArticleCid]);

  const addArticle = async (newArticleID) => {
    setIsLoading(true);
    try {
      const res = await contract.addArticle(passportId, newArticleID, {
        from: account,
        gasLimit: 210000,
      });

      const Transaction = await res.wait();

      await getArticles(passportId);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("my er", error.message);
    }
  };

  const editArticleContract = async (newID) => {
    setIsLoading(true);
    try {
      const res = await contract.editArticle(
        passportId,
        selectedArticle.id,
        newID,
        {
          from: account,
          gasLimit: 210000,
        }
      );
      const Transaction = await res.wait();
      await getArticles(passportId);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("my er", error.message);
    }
  };

  const createArticle = async (article) => {
    setIsLoading(true);
    var data = JSON.stringify({
      passport: passportId,
      article: article.article,
    });

    let response = await axios(createArticleConfig(data));
    let articleCID = response.data.cid;
    await addArticle(articleCID);
    setIsLoading(false);
  };

  const editArticle = async () => {
    setIsLoading(true);
    var data = JSON.stringify({
      passport: passportId,
      article: article.article,
      articleCID: selectedArticle.article,
    });

    let response = await axios(editArticleConfig(data));
    let articleCID = response.data.cid;
    await editArticleContract(articleCID);
    setIsLoading(false);
  };

  async function uploadToIpfs(e) {
    await createArticle(article);
  }
  const getOldArticle = async () => {
    await getArticle(article.oldVersion);
    await selectParent();
  };

  return (
    <>
      <div className="flex flex-col p-10 bg-gray-100 rounded-md shadow-lg min-h-540">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="flex flex-col items-start my-3">
          <textarea
            onChange={(e) => {
              setArticle({ ...article, article: e.target.value });
            }}
            placeholder="Write content here!"
            value={article.article}
            className="w-full h-40 p-3 border-2 rounded-md focus:outline-none"
          ></textarea>
          <div className={"flex justify-between"}>
            <button
              onClick={uploadToIpfs}
              className="h-12 px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded w-60 hover:bg-blue-700"
            >
              Upload New Article
            </button>
            {selectedArticle && (
              <button
                onClick={deselectArticle}
                className="h-12 px-4 py-2 mt-5 ml-2 font-bold text-white bg-blue-500 rounded w-60 hover:bg-blue-700"
              >
                Deselect
              </button>
            )}
          </div>
          <div className={"flex justify-between"}>
            {selectedArticle?.article && (
              <button
                onClick={editArticle}
                className="h-12 px-4 py-2 mt-5 mr-2 font-bold text-white bg-blue-500 rounded w-60 hover:bg-blue-700"
              >
                Edit Article
              </button>
            )}
            {article.article && article.oldVersion !== null && (
              <button
                onClick={() => {
                  getOldArticle();
                }}
                className="h-12 px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded w-60 hover:bg-blue-700"
              >
                Previous Article Version
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
