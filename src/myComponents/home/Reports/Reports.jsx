import React from 'react';
import './Reports.css';

const Reports = () => {
  return (
    <div className="report-container">
      <section className="header-section">
        <h1>Women’s Struggles During Floods: A Focus on Physical, Mental, and Financial Challenges</h1>
        <p className="publication-year">Publication year: 2024</p>
      </section>

      <section className="content-section">
        <p>
          This report sheds light on the multifaceted struggles women face during flood disasters, with a particular focus on pregnant women. It highlights how climate change exacerbates existing inequalities, impacting women's physical, mental, and financial well-being.
        </p>
        <p>
          Women are often the primary caregivers in their families, and during floods, their responsibilities increase significantly. They face challenges in accessing healthcare, leading to increased risks for both themselves and their unborn children. The mental toll of displacement, loss of livelihood, and lack of support can result in severe anxiety and depression.
        </p>
        <p>
          Financial struggles are also pronounced, as women frequently lose income-generating opportunities during disasters. The report emphasizes the importance of integrating gender-sensitive approaches in disaster management and response to ensure that women’s needs and voices are prioritized.
        </p>
        <p>
          Special attention must be given to pregnant women during floods. Access to maternal healthcare and resources is critical to prevent complications and ensure healthy outcomes for both mothers and babies. The report calls for community involvement and support systems to assist these vulnerable groups during such crises.
        </p>

        <div className="document-links">
          <h2>Additional documents</h2>
          <ul>
            <li><a href="#">Full Report (PDF, 1.5MB)</a></li>
            <li><a href="#">Infographic Summary (PDF, 500KB)</a></li>
            <li><a href="#">Recommendations for Action (PDF, 400KB)</a></li>
          </ul>
        </div>

        <div className="other-links">
          <h2>Other:</h2>
          <ul>
            <li><a href="#">Webinar: Addressing Women's Needs in Flood Situations</a></li>
            <li><a href="#">Press Release: Launch of Women’s Struggles Report</a></li>
            <li><a href="#">Panel Discussion: Gender Equality in Climate Action</a></li>
          </ul>
        </div>
      </section>

      <section className="bibliographic-info">
        <h2>Bibliographic information</h2>
        <p><strong>Resource type(s):</strong> Assessments, Reports, Infographics</p>
        <p><strong>Publication series:</strong> Women and Climate Change: Challenges and Solutions</p>
        <p><strong>Published by:</strong> Prohora Initiative</p>
        <p><strong>Number of pages:</strong> 40</p>
        <p><strong>ISBN:</strong> 978-0-123456-78-9</p>

        <div className="tags">
          <span>Women’s Health</span>
          <span>Mental Well-being</span>
          <span>Climate Resilience</span>
          <span>Gender Equality</span>
          <span>Disaster Management</span>
          <span>Pregnancy</span>
          <span>Community Support</span>
          <span>Financial Empowerment</span>
        </div>
      </section>
    </div>
  );
}

export default Reports;
