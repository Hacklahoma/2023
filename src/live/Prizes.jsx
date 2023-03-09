import React from "react";
import Section from "../components/Section";
import "../styles/prizes.scss";

/**
 * List of prizes and challenges
 */
const Prizes = () => (
  <Section>
    <div id="prizes" className="prizes">
      <h2>Prizes&nbsp;</h2>
      <div className="prize-container">
        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="First Place"
              src="/images/prizes/first_place_trophy.png"
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">First Place</h3>
            <p>
              This prize will be given to the team or individual who places
              first, overall. Each team member will receive a <b>Nintendo Switch</b>.
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Second Place"
              src="/images/prizes/second_place_trophy.png"
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Second Place</h3>
            <p>
              This prize will be given to the team or individual who places
              second, overall. Each team member of the winning team will receive <b>Airpod Pros</b>.
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Third Place"
              src="/images/prizes/third_place_trophy.png"
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Third Place</h3>
            <p>
              This prize will be given to the team or individual who places
              third, overall. Each team member of the winning team will receive
              a <b>Monitor</b>.
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Beginner"
              src="/images/prizes/best_beginner.png"
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Beginner</h3>
            <p>
              This category rewards the best beginner hack. To be considered for
              this prize, the hack must be created by first time hackers. Each
              team member of the winning team will receive an <b>Amazon Alexa</b>.
            </p>
          </div>
        </div>

        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Theme"
              src="/images/prizes/best_theme.png"
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Theme</h3>
            <p>
              This category rewards the best theme for a hack. Hacks considered
              for this category will embrace our retro theme this year. Each
              team member of the winning team will receive a{" "}
              <b>Keychron K8 Keyboard</b>.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="prize-item">
          <div className="prize-item-imgcon">
            <img
              alt="Best Theme"
              src="/images/prizes/digikey.png"
              className="prize-item-img"
            />
          </div>
          <div className="prize-item-content">
            <h3 className="center">Best Hardware Hack</h3>
            <p>
              Using your preferred hardware or hardware emulator, build a hack
              for your chance to win an <b>Arduino Kit</b>!
            </p>
          </div>
        </div>

      </div>
    </div>
    <p
      className="prize-note"
      style={{ textAlign: "center", marginTop: "15px" }}
    >
      Prizes limited to residents of the United States only <br />
      with the EXCEPTION of MLH and echoAR prizes which are open to all
      participants
    </p>
  </Section>
);

export default Prizes;
