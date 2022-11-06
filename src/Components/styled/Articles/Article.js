import React from "react";
import { StyledArticleSection } from "./Article.styled";
import IllustrationGrowTogether from "../../svgs/IllustrationGrowTogether";
import IllustrationFlowingConversations from "../../svgs/IllustrationFlowingConversations";
import IllustrationsYourUsers from "../../svgs/IllustrationsYourUsers";
import { StyledButton } from "../Button/Button.styled";

function Article() {
  return (
    <StyledArticleSection>
      <article>
        <IllustrationGrowTogether />
        <div>
          <h3>Every diagnosis / consultancy across the country will be logged in the account automatically</h3>
          <p>
            You might ask how? Well, just like you have a universal AADHAR account, we will have a universal health account. This will be a single place where you can access all your medical history.
          </p>
        </div>
      </article>
      <article>
        <IllustrationFlowingConversations />
        <div>
          <h3>Provides efficient and effective data for research</h3>
          <p>
            Let's be honest here, Government doesn't know what's happening on the account of the lack of data. With this, we will be able to provide them with the data they need to make better decisions.
          </p>
        </div>
      </article>
      <article>
        <IllustrationsYourUsers />
        <div>
          <h3>That non sense data, will now be making much more sense</h3>
          <p>
            Let's face it, Doesn't matter how educated we are, unless and until we are not doctors that medical report is not making much sense to us,
            but with Deerghayu, you will be able to medical reports in the form of graphs and charts, which will make it much more easier to understand.
          </p>
        </div>
      </article>

      <div className="cta">
        <h2>Ready To See the next big revolution in Health domain?</h2>
        <a href="https://user-deerghayu.netlify.app/" target={"_blank"}>
        <StyledButton>Explore here</StyledButton>
        </a>
      </div>
    </StyledArticleSection>
  );
}

export default Article;
