// src/components/FeatureTabs.js
import React, { useState } from "react";
import Card from "./Card"; // Cardコンポーネントをインポート

export default function FeatureTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="features" id="features">
      <h2 className="section-title"></h2>
      <div className="features-container">
        <div className="feature-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.title}</span>
            </div>
          ))}
        </div>

        <div className="feature-content">
          {tabs.map((t) =>
            t.id === activeTab ? (
              <div key={t.id}>
                {t.sections.map((section, idx) => (
                  <div key={idx} className="section-block">
                    <p>{section.description}</p>
                    <div className="cards-container">
                      {section.items.map((item, i) => (
                        <Card key={i} label={item.label} url={item.url} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
