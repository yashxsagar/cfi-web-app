import React from "react";
import ReactMarkdown from "react-markdown";

const pp = () => {
  const pp = `
Last Updated: July 15, 2024

CompX ("we," "us," or "our") operates the website https://compx.app (the "Service").

**Information Collection and Use**
We collect and use the following types of information for providing our services:

**Personal Data**

Name: To personalize your experience and communicate with you effectively.

Email: To send you important information regarding your account, updates, and communication.

Profile Picture: To enhance personalization.

**Notion Account Data**

Notion Provider Id: To locate your Notion workspace on the N0tion platform

Workspace URL: To redirect you upon completion of the Notion OAuth Flow to your dedicated Notion Workspace 

Database Id and Name: To locate the developer (CompX) supplied Notion page that you duplicate in your workspace and provision the compensation indicator service for that dedicated page

**Compensation aka Job Entries made by you:**

Job Title, City/County, State and Compensation Offered entered by you as table records in the 'CompX Fairness Indicator' page to determine and display compensation fairness for each job entry/record in the form of a Compensation Indicator, Fairness Remarks and a Justification PDF report for comparative assessment. We retain access to the computed fields/values for each job enty/record you make on the CompX Fairness Indicator page in your Notion workspace

**Data Collection Methods**

We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us enhance your browsing experience, analyze trends, and improve our services.

**Purpose of Data Collection**
We collect and use your personal data to:

a. Process your authentication with Notion.
b. Create and manage your CompX Fairness Indicator Notion database including the provision of the Service.
c. Provide customer support and keep you updated about your account and related services.

**Data Sharing**
We do not share your personal data with any third parties except as required to provide our services (e.g., sharing information with Notion API). We do not sell, trade, or rent your personal information to others.

**Children's Privacy**
CompX is not intended for individuals under the age of 17. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at tabindex1@gmail.com so we can take necessary actions.

**Updates to the Privacy Policy**
We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

**Contact Information**
If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

Email: tabindex1@gmail.com

Thank you for using CompX!

`;
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <a className="btn btn-ghost" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ffffff"
            className="w-5 h-5"
          >
            <path
              fill="#ffffff"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back
        </a>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for CompX
        </h1>
        <pre className="leading-relaxed whitespace-pre-wrap font-sans tos-container">
          <ReactMarkdown>{pp}</ReactMarkdown>
        </pre>
      </div>
    </main>
  );
};

export default pp;
