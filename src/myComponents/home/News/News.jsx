import React from "react";
import "./News.css";
import not_found from "../../images/not-found.png"

const News = () => {
  return (
    <div className="news-container">
      <section className="news-filters">
        <h2>Explore our latest news</h2>
        <div className="filter-bar">
          <input type="text" placeholder="Search..." />
          <div className="filter-options">
            <select>
              <option value="">Type</option>
              {/* Add more options as needed */}
            </select>
            <select>
              <option value="">Topic</option>
              {/* Add more options as needed */}
            </select>
            <select>
              <option value="">Region</option>
              {/* Add more options as needed */}
            </select>
            <select>
              <option value="">Country</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className="clear-filters">CLEAR FILTERS</button>
        </div>
      </section>

      <section className="news-cards">
        <div className="news-card">
          <div className="tag">Feature story</div>
          <img
            src={not_found} // Replace with actual image URL
            alt="News"
          />
          <h3>Empowered Women Lead the Charge: Mobilizing Aid and Community Support Amidst Bangladesh's Flood Crisis</h3>
          <p>3 September 2024</p>
        </div>

        <div className="news-card">
          <div className="tag">Statement</div>
          <img
            src={not_found} // Replace with actual image URL
            alt="News"
          />
          <h3>Flooding in Bangladesh: Women's Health and Safety at Risk Amidst Climate Crisis</h3>
          <p>29 August 2024</p>
        </div>

        <div className="news-card">
          <div className="tag">Press release</div>
          <img
            src={not_found} // Replace with actual image URL
            alt="News"
          />
          <h3>Empowering Women: Addressing Gender-Specific Needs in Bangladesh's Flood Response</h3>
          <p>27 August 2024</p>
        </div>
      </section>
    </div>
  );
};

export default News;
