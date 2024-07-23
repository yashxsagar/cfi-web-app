import React from "react";
import ReactMarkdown from "react-markdown";

const tos = () => {
  const tos = `
Last Updated: July 15, 2024

Welcome to CompX!
  
These Terms of Service ("Terms") govern your use of the CompX website at [https://tabs./io/pp](https://tabx.io) ("Website") and the services provided by CompX. By using our Website and services, you agree to these Terms.
  
**Description of CompX**
CompX is a compensation fairness indicator platform that evaluates the market competitiveness of the compensation offered to you using wage disclosures data from the US Department of Labor.
  
**Usage Rights**
When you use CompX, you gain the right to assess the fair monetary value of your job role at a given location in the US using a subjective scale called, the 'Fairness Scale' built by us. You own the content aka job/wage entries you key in using the Notion template but have no express rights over the algorithm used to compute the Fairness Indicator, Assessment Remarks and the Justification PDF report.
  
**User Data and Privacy**
We collect and store user data, including your name, email, profile picture, Notion provider id, Notion database id, Notion workspace url to personalize your experience and render our service accurately. For details on how we handle your data, please refer to our Privacy Policy at https://tabx.io/pp.
  
**Data Collection Methods**
We may use web cookies and similar technologies to collect non-personal data for the purpose of improving our services and user experience.

**Indemnification and Limitation of  Liability**
To the fullest extent permitted by applicable law, in no event shall CompX, its affiliates, directors, employees, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; (c) any content aka wage assessment or wage guidance obtained from the services; and (d) unauthorized access, use, or alteration of your transmissions or content. In no event shall CompX's aggregate liability for all claims related to the services exceed the greater of one hundred U.S. dollars (U.S. $100.00) or the amount you paid CompX, if any, in the past six months for the services.

You agree to defend, indemnify and hold harmless CompX and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the service.

This limitation of liability section does not intend to exclude the liability for the negligence of CompX in regards to its services to you, which cannot be excluded under applicable law.

**Governing Law**
These Terms are governed by the laws of the United States.
  
**Updates to the Terms**
We may update these Terms from time to time. Users will be notified of any changes via email or through our Website.

For any questions or concerns regarding these Terms of Service, please contact us at tabindex1@gmail.com.

Thank you for using CompX!`;
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
          Terms and Conditions for CompX
        </h1>
        <pre className="leading-relaxed whitespace-pre-wrap font-sans tos-container">
          <ReactMarkdown>{tos}</ReactMarkdown>
        </pre>
      </div>
    </main>
  );
};

export default tos;
