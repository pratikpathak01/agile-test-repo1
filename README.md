# User Stories and Acceptance Criteria

1. User Story for "Hello Professor" Web Page Title:
   - As a website visitor, I want to see a clear and descriptive page title "Hello Professor" displayed in the browser tab when I visit the web page, so I can easily identify the purpose of the page.

   Acceptance Criteria for "Hello Professor" Web Page Title (Automated e2e Playwright Tests):
   - Given I open the web page in a browser,
   - Then the title of the browser tab should be "Hello Professor".

2. User Story for "Hello Professor" Web Page Heading (h1 Tag):
   - As a website visitor, I want to see a prominent and descriptive heading "Hello Professor" displayed on the web page using the `<h1>` tag, so I can immediately understand the main content or purpose of the page.

   Acceptance Criteria for "Hello Professor" Web Page Heading (Automated e2e Playwright Tests):
   - Given I open the web page in a browser,
   - Then I should see the text "Hello Professor" displayed as the main heading (h1) of the page.

3. Technical User Story for a GitHub Action to Run Playwright Automated Tests Before Allowing Code Merge to Master Branch:
   - As a development team member or code reviewer, I want a GitHub Action to automatically run Playwright tests on the code changes before allowing a merge to the master branch, so we can ensure the code changes meet the required quality standards and do not introduce regressions.

   Acceptance Criteria for the GitHub Action to Run Playwright Automated Tests (Including Manual Testing):
   - Given a pull request is created with code changes,
   - When the GitHub Action for Playwright tests is triggered,
   - Then the Playwright tests should execute successfully without any failures for the modified code files or affected functionalities.
   - If any test fails, the GitHub Action should report the failure status and prevent the merge to the master branch.
   - The development team and code reviewers should receive email notifications about test failures.
   - The Playwright tests should cover critical functionality and edge cases in the web application to ensure comprehensive test coverage.

4. Technical User Story for a GitHub Action to Deploy the Site to GitHub Pages After a Merge:
   - As a development team member, I want a GitHub Action to automatically deploy the web page to GitHub Pages after a successful merge to the master branch, so the latest changes are accessible to website visitors without manual deployment steps.

   Acceptance Criteria for Manually Testing the Deployment of the Site:
   - Given the GitHub Action for deployment is triggered after a successful merge to the master branch,
   - When I visit the GitHub Pages URL for the web page,
   - Then I should see the latest version of the web page with the "Hello Professor" title and heading visible as expected.
   - All functionalities on the web page should work correctly without any issues or errors.
   - The web page should display properly on different devices and browsers, ensuring it is responsive and accessible.

### Figma Template

![Figma](figma.png)

### Link to Site

[Visit My Website](https://pratikpathak01.github.io/agile-test-repo1/)

# Unit Overview

For a software product to be valuable, it must both function flawlessly and meet the genuine needs of its users. If not done correctly, a faulty software can lead to various challenges, including financial losses, public embarrassment, potential lawsuits, security breaches, and more. Historically, many software projects fail to reach successful completion, both technically and financially.

Drawing from my three-decade-long experience in this domain, one key insight I can share is the importance of minimalism. In designing software, one should strive to determine the most streamlined solution that addresses the specific business need in question. While the concept of minimalism seems simple, executing it can be challenging. The objective of this unit is to offer you insights and knowledge from my experience, helping you grasp various technologies and ideas. While these concepts are often explored in isolation, we'll study them from a comprehensive, practical perspective. This unit will guide you through the creation of a basic product using Next.JS, Playwright, and GitHub actions.

Remember, when devising a new product, it's crucial to focus on a "pull" approach in product development. This involves prioritizing what users truly want rather than pushing a product or feature upon them. While introducing novel products sometimes requires this "push" strategy, it's inherently riskier. Every decision made without direct user feedback can lead to wasted resources, misalignment with user needs, or even a decline in customer base. To mitigate such risks, product developers should heavily rely on direct user feedback and meticulous product research.  

## Assignment Instructions

In this assignment, your customer is requesting a web page that that says "Hellow Professor" in a heading tag on the homepage and that the web page title it set to "Hello Professor". 

**You will need to do the following:**

1.  Write a user story for the "Hello Professor" web page title.
2.  Write acceptance criteria for the "Hello Professor" web page title that are automated e2e Playwright tests.
3.  Write a user story for the "Hello Professor" using the h1 tag 
4.  Write acceptance criteria for the "Hello Professor" web page heading tag that are automated e2e Playwright tests.
5.  Write a technical user story for a GitHub action to run playwright automated tests before allowing the code to be merged to the master branch
6.  Write acceptance tests that include manual testing of the GitHub action for testing the code before a merge is allowed to the master branch.
7.  Write a technical user story for a GitHub action to deploy the site to GitHub pages after a merge.
8.  Write acceptance criteria for manually testing the deployment of the site.

Note: You might want to challeenge yourself to figure out a method for testing step #8 by automaticly running playwright tests, after deploymnet but having a specific test to go to the site's deployed URL.



Your task is to implement this with the NextJS project provided, write Playwright tests to check that both requirements are met, and 

**Topics**
- Agile Documentation
- Acceptance Testing Documentation
- AAA Testing Pattern
- Devops (GitHub Workflows)
- Playwright end-to-end (e2e) testing

## Workflow 

test