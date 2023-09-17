import { FaQuestion } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import Error from "./Error";
import Loading from "./Loading";
import ReactMarkdown from "react-markdown";

export default function AboutECS() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/about/?populate=*"
  );

  const cachedData = !loading && !error && data;

  return (
    <div className="bg-gray-100 pt-20">
      <div className="bg-primary py-12 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-4 text-white">
          <FaQuestion size={40} />
          <span className="text-white text-4xl">About ECSC</span>
        </div>
        <div className="text-lg text-white pt-2">
          Let&apos;s delve into the history of the Electronics and Computer
          Science degree program!
        </div>
      </div>
      <>
        {error ? (
          <Error marginY={0} />
        ) : loading ? (
          <Loading marginY={0} />
        ) : (
          <>
            <img
              className="w-full max-h-[360px] object-cover"
              src={cachedData.data.attributes.coverImage.data.attributes.url}
            />
            <ReactMarkdown className="text-xl p-4 md:p-8 font-semibold whitespace-pre-wrap">
              {cachedData.data.attributes.content}
            </ReactMarkdown>
          </>
        )}
      </>
    </div>
  );
}
