import Link from "next/link";
import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-[75vh] py-24 max-w-7xl mx-auto px-0 md:px-4">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-center md:text-left basis-1/3">
          <p className="inline-block font-semibold text-primary-content mb-4 text-xl">
            FAQ
          </p>
          <p className="text-4xl font-extrabold text-accent-content/80">
            Frequently Asked Questions
          </p>
        </div>
        <section className="basis-2/3 text-secondary-content font-semibold text-left">
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              Why do I need CompX?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                Are you someone who&apos;s about to join a new job or switch
                gigs or awaitng your appraisal. How do you know whether the comp
                offered by your HR manager is fair or not? CompX does exactly
                that. It tells you the competitiveness of your pay while drawing
                from hard objective wage disclosures data from the US Dept. of
                Labor
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              Does it work only with Notion?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                Yes, for now! Based on user feedback obtained on ProductHunt,
                Reddit and Hacker News we&apos;ll launch a web native version
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              Is it secure?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                Yes, it is secure. All components namely, the Notion Public
                Integration, the app backend and the database have been
                configured and programmed with tight security protocols and best
                practices
              </p>
            </div>
          </div>
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              Why does auto highlight and scroll not work on certain tabs?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                Web pages have complicated and nested layouts and formatting.
                Sometimes your search keyword may be found on a web page but
                it&apos;s visibility may be intentionally hidden by the website
                publisher or your keyword may be found within a scrollable
                container that lies within another scrollable container thereby
                hindering auto-scroll or at times there maybe complex sliders
                that contain your search keywrord but may not be presently
                visible thereby preventing auto highlight and scroll. We try our
                best to make auto scroll account for these complexities and are
                expanding our functionality continuously to cover as many
                website layouts as possible{" "}
              </p>
            </div>
          </div> */}
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              What user data do you collect?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                We only collect data that enriches your usage of CompX - Profile
                Data such as name, email, profile picture when you Login Via
                Notion to personalize your experience; entries you make on the
                CompX Fairness Indicator page on Notion to determine and fetch
                the Compensation fairness{" "}
              </p>
            </div>
          </div>
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              Can I create a TabX account?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                Yes! In case you want to upgrade to TabX Pro plan for continued
                access to Content Matches and Auto Highlight and Scroll, then
                you must create an account to purchase the Pro plan and use it.
              </p>
            </div>
          </div> */}
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              What is your refund policy?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                We offer a 14 Days no questions asked refund from the date of
                TabX Pro purchase. Simply write to us at tabindex1@gmail.com
              </p>
            </div>
          </div> */}
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              Can I search for content from tabs that are no longer open aka my
              browsing history?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                The best question you&apos;ve ever asked. Well, this is the Holy
                Grail of tab indexing. We&apos;re building this feature called,
                &apos;History Matches&apos; right now that&apos;ll filter and
                fetch keyword matches from your browsing history going back into
                infinity. If you ever encounter Deja Vu regarding any piece of
                info, chances are you&apos;ve visited that info on a Chrome
                browser. Simply fire up TabX and type in your search query,
                you&apos;ll get a 3rd section on your search results called
                &apos;History Matches&apos; which is essentially matches from
                your browsing history - Yes! matches from the tabs that you may
                have closed maybe a week back or 2 yeaers back. Imagine trying
                to retreive such a tab going through a Google Search - it&apos;s
                like navigating a maze!{" "}
              </p>
            </div>
          </div> */}
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              Is there a user dashboard on the CompX.io website?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                Yes! We&apos;re working on fleshing out a User Dashboard on our
                website that&apos;ll allow you after login to view and delete
                your job search history, plan status and other features
              </p>
            </div>
          </div>
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              I see a yellow warning aka Issue on my chrome dev console?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                If you ever see something like, &quot;Third-party cookie will be
                blocked. Learn more in the Issues tab.&quot; then this is just a
                warning issued by Chrome for it&apos;s future versions. This is
                not an error but a waarning and you can simply ignore it. It
                doesn&apos;t affect the extension&apos;s working
              </p>
            </div>
          </div> */}
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              TabX is not displaying search results from a certain tab or tabs?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                There can be 2 reasons why you&apos;re not seeing Content
                Matches from a certain tab or tabs - If a system tab that begins
                with chrome:// such as{" "}
                <a className="link link-secondary-content">
                  chrome://settings/
                </a>
                ,{" "}
                <a className="link link-secondary-content">
                  chrome://downloads/
                </a>
                ,{" "}
                <a className="link link-secondary-content">
                  chrome://password-manager/passwords
                </a>
                ,{" "}
                <a className="link link-secondary-content">
                  chrome://downloads/
                </a>{" "}
                Chrome does not allow indexing or querying the content of such
                system tabs that begin with chrome:// Secondly, if atab is in
                &apos;discarded&apos; aka sleep state. Chrome at times discards
                certain tabs &apos;un&apos;loading them from memory in order to
                conserve power, CPU and memory. This haoppens especially when
                you have a truck load of tabs open or you&apos;ve enable
                chrome&apos;s power saver mode.
              </p>
            </div>
          </div> */}
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              What is the trial duration for TabX Pro aka content matches?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>7 days from the date of installation</p>
            </div>
          </div> */}
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              Can i edit the CompX Fairness Assessment Notion Page?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                Please do not change page elements like Page Title, Page
                Description and columne names such as Job Title, Location,
                State, Fairness Indicator, Justification, etc. This will break
                the integration with our database and prevent the app from
                working as usual or stop working at all. Only make new job/comp
                entries on fresh rows. In casse you want to refresh the results
                of a particular job search/entry simplly delete the Fairness
                Indicator value for that entry. Our systems will detect the
                change and auto refresh the outcome values - Fairness Indicator,
                Assessment Remarks and Justification PDF report for that search
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              Can I search for Job Role(s) that are not listed?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                Unfortunately No!. You can only look up compensation assessment
                for the ~275 odd Job Roles that we support and are listed in the
                dropdown fo the Job Role column of the CompX Fairness Indication
                Notion page. If you proceed to add custom Job Role(s) the app
                won&apos;t be able to fetch the Compensation Assessment output
                for those entries
              </p>
            </div>
          </div>
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              Does it work in Incognito Mode?
            </div>
            <div className="collapse-content text-secondary/70 font-thin">
              <p>
                Yup! Works like a charm.
                <Link href="" className="link">
                  Incognito
                </Link>{" "}
                mode
              </p>
            </div>
          </div> */}
          <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
              My CompX Fairness Indicator is not working on Notion
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <p>
                In case your CompX Fairness Indicator stops issuing outputs -
                Fairness Indicator, Assessment Remarks and Justification
                Report(s), it could be due to one of the following reasons -
              </p>
              <ol>
                <li className="normal-nums">
                  a. Stale Page - Simply refresh the Notion page to fix it
                </li>
                <li className="normal-nums">
                  b. Changes made to the Notion Page components such as page
                  title, page description, column names - Job Title, Location,
                  State, Fairness Indicator or so on - Go to the{" "}
                  <Link href="https://tabx.io">CompX</Link> website and hit{" "}
                  <b>Login with Notion</b> to re-authenticate with Notion. Our
                  app will embed a fresh copy of the CompX Fairness Indicator
                  Notion page. Start making entries into it and it should detch
                  outputs as usual. You may copy over the records/searches (Job
                  Role, Location, State, Compensation Offered) from the previous
                  version of the Notion page here as well and our system will
                  update the assessment results for the same
                </li>
                <li className="normal-nums">
                  c. Deleted Connection: If you delete the CompX - CFI
                  connection from your Notion workspace and account from the
                  tripe dot (•••) Menu on the top-right of your Notion
                  workspace, the page will stop issuing compensation assessment
                  for new records aka job entries. To fix it simply go to the{" "}
                  <Link href="https://tabx.io">CompX</Link> website and hit{" "}
                  <b>Login with Notion</b> button to re-authenticate with
                  Notion, grant the requested permissions and on the final
                  screen, choose option 2, titled{" "}
                  <b>Select pages to share with CompX - CFI</b>. From the pages
                  list, choose <b>CompX Fairness Indicator</b> and you should be
                  good to go - the Notion page will start issuing compensation
                  assessment outputs
                </li>
              </ol>
            </div>
            <div className="collapse collapse-plus">
              <input type="checkbox" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium border-t md:text-lg border-primary-content/10">
                Why is Notion requesting me to grant permissions to CompX CFI
                again?
              </div>
              <div className="collapse-content text-primary-content/70 font-thin">
                <p>
                  Yes, it is secure. All components namely, the Notion Public
                  Integration, the app backend and the database have been
                  configured and programmed with tight security protocols and
                  best practices
                </p>
              </div>
            </div>
          </div>
          {/* <div className="collapse collapse-plus">
            <input type="checkbox" name="faq-accordion" />
            <div className="collapse-title text-xl font-medium border-t md:text-lg border-secondary/10">
              What about Keyboard Shortcuts?
            </div>
            <div className="collapse-content text-primary-content/70 font-thin">
              <div>
                TabX supports the following keyboard shortcuts Out of the Box
                <br />
                <br />
                <section className="flex flex-col">
                  <span>
                    <kbd className="kbd text-sm">Ctrl/Cmd</kbd> +{" "}
                    <kbd className="kbd text-sm">↑</kbd> - Move Up
                  </span>
                  <br />
                  <span>
                    <kbd className="kbd text-sm">Ctrl/Cmd</kbd> +{" "}
                    <kbd className="kbd text-sm">↓</kbd> - Move Down
                  </span>
                  <br />
                  <span>
                    <kbd className="kbd text-sm">Ctrl/Cmd</kbd> +{" "}
                    <kbd className="kbd text-sm">Shift</kbd> +{" "}
                    <kbd className="kbd text-sm">→</kbd> - Navigate to Target
                    Tab
                  </span>
                  <br />
                  <span>
                    <kbd className="kbd text-sm">Ctrl/Cmd</kbd> +{" "}
                    <kbd className="kbd text-sm">.</kbd> - Focus on Search Bar
                  </span>
                </section>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default FAQ;
