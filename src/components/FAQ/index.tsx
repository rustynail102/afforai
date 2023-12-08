import Faq from "react-faq-component";
import "./index.css";

const data = {
  rows: [
    {
      title: "Is Afforai free?",
      content: `Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits`,
    },
    {
      title: "What are subscription credits versus permanent credits?",
      content:
        "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
    },
    {
      title:
        "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
      content: `Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated. `,
    },
    {
      title: "Does Afforai support uploading images and video?",
      content: `Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.`,
    },
    {
      title: "Does Afforai support collaboration between accounts?",
      content: `Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.`,
    },
    {
      title: "Is my data secured?",
      content: `Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.`,
    },
  ],
};

const styles = {
  rowTitleColor: "grey",
  rowContentColor: "grey",
  arrowColor: "black",
};

export const FAQ = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row m-b-12">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container">
            <div className="text-center mb-3 faqs">FAQs</div>
            <div className="text-center more-info">
              For more information, check out our{" "}
              <a href="https://help.afforai.com/" className="help-center">
                Help Center.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column gap-3 col faq-container">
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </div>
  );
};
