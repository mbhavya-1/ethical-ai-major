import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function CommunityGuardApp() {
  const [activeSection, setActiveSection] = useState("home");

  // Sample data for the chart
  const flaggedData = [
    { group: "AAVE", flagged: 30 },
    { group: "Satire", flagged: 15 },
    { group: "Hindi-English", flagged: 25 },
    { group: "Standard English", flagged: 5 }
  ];

  // Navigation items for sidebar
  const navItems = [
    { id: "home", label: "Home" },
    { id: "moderation", label: "Moderation" },
    { id: "explainability", label: "Explainability" },
    { id: "feedback", label: "Feedback" },
    { id: "bias", label: "Bias Auditing" },
    { id: "model", label: "Model Performance" },
    { id: "admin", label: "Admin Panel" }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">CommunityGuard</h2>
        <div className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full p-2 text-left rounded ${
                activeSection === item.id 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white shadow rounded-lg p-6">
          {activeSection === "home" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Welcome to CommunityGuard</h1>
              <p className="text-lg">Safeguarding online communities through fair, transparent, and culturally sensitive AI moderation.</p>
              <button 
                onClick={() => setActiveSection("moderation")} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Get Started
              </button>
            </div>
          )}

          {activeSection === "moderation" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Live Moderation Feed</h2>
              <div className="border p-2 rounded-xl">[Live Feed Placeholder] Real-time moderated post: "Nah that ain't it chief."</div>
              <h3 className="font-medium">Statistics</h3>
              <ul className="list-disc pl-6">
                <li>Content Type: 52% text, 30% image, 18% video</li>
                <li>Community: 40% flagged from minority dialects</li>
                <li>Language: 60% English, 20% Hindi, 10% Spanish, 10% Other</li>
              </ul>
              <h3 className="font-medium">Recent Decisions</h3>
              <p>"Bruh y'all corny fr 😭" — Flagged (Confidence: 72%)</p>
              <h3 className="font-medium">Alerts</h3>
              <p>Spike in flags for bilingual memes (possible false positives).</p>
            </div>
          )}

          {activeSection === "explainability" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Flag Analysis</h2>
              <p><strong>Post:</strong> "This guy's takes are dumb af 😂"</p>
              <p><strong>Why It Was Flagged:</strong> Use of "dumb af" + negative tone (Model Confidence: 65%)</p>
              <p><strong>Flag Trigger:</strong> Phrase matching with prior hate speech templates</p>
              <p><strong>Context Analysis:</strong> Cultural norms in AAVE considered informal but not abusive</p>
              <p><strong>Comparison:</strong> Model vs Human Label — Mismatch found → flagged for review</p>
            </div>
          )}

          {activeSection === "feedback" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Appeal a Decision</h2>
              <input 
                type="text" 
                placeholder="Enter Post ID" 
                className="w-full p-2 border rounded mb-2"
              />
              <textarea 
                placeholder="Your feedback on the moderation" 
                className="w-full p-2 border rounded h-32 mb-2"
              ></textarea>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Submit
              </button>
              <h3 className="font-medium mt-4">Reviewer Portal [Admin only]</h3>
              <p>Moderators can review submitted appeals and flag system improvements.</p>
              <h3 className="font-medium">Feedback Stats</h3>
              <p>Resolution Rate: 85% | Avg. Response Time: 3.2 hrs</p>
            </div>
          )}

    {activeSection === "bias" && (
        <div>
        <h2 className="text-xl font-semibold mb-4">Bias Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={flaggedData}>
            <XAxis dataKey="group" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="flagged" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        <p>Highlighted: AAVE and Hinglish show overflagging — recommend retraining.</p>
        </div>
    )}

          {activeSection === "model" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Model Training Insights</h2>
              <p><strong>Federated Learning:</strong> Enabled across 30,000 user devices</p>
              <p><strong>Privacy Measures:</strong> Differential privacy and secure aggregation</p>
              <p><strong>Active Learning:</strong> 18% of appeals incorporated into next-gen model</p>
              <p><strong>Improvement Sample:</strong> Flagged AAVE post reclassified correctly after update</p>
            </div>
          )}

          {activeSection === "admin" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Admin Configuration</h2>
              <p><strong>Reviewer Access:</strong> Add/Remove trusted community reviewers</p>
              <p><strong>Policy Updates:</strong> Modify flagging thresholds and review rules</p>
              <p><strong>Language Support:</strong> Add new dialects and fine-tune moderation for each</p>
              <p><strong>Transparency Controls:</strong> Choose what users see in explanations</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
