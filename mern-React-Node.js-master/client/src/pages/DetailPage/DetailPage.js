import React, { useCallback, useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import useHttp from "./../../hooks/http.hook";
import { AuthContext } from "./../../context/AuthContext";
import { Loader } from "./../../components/Loader/Loader";
import { LinkCard } from "./LinkCard";

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkID = useParams().id;
  

  const getLink = useCallback(async () => {
    try {
      const data = await request(`/api/link/${linkID}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(data);
    } catch (error) {}
  }, [token, linkID, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (<div>{!loading && link && <LinkCard link={link} />}</div>);
};
