### Instruction Manual: YouTube Platform & Advertising Operations (August 2025 – February 2026\)

**Document Status:**  Final**Effective Date:**  February 2026**Author:**  Platform Operations Documentation Lead

##### 1\. AI-Driven Campaign Optimization & Automation

Deployment and scaling of AI-powered tools require strict adherence to the following operational configurations to ensure reach and ROI efficiency.

###### *AI Max for Search Campaigns*

Activate via the  **"Optimize your campaign with AI Max"**  toggle within existing search workflows.

1. **Search Term Matching:**  Automated expansion of keywords to capture relevant traffic beyond exact match.  
2. **Text Customization (Formerly Automatically Created Assets):**  Generates tailored ad copy dynamically based on user search queries.  
3. **Final URL Expansion:**  Uses Google AI to direct traffic to landing pages predicted to yield the highest performance.  
4. **Ad Group Controls:**  Manage location, brand targeting, and search term matching at the  **ad group level**  to maintain granular transparency.  
5. **Reporting:**  Utilize dedicated reporting views to monitor performance of specific search terms, headlines, and landing pages used by AI Max.

###### *Performance Max (PMax) Scaling*

Deploy these five core strategies to scale Performance Max performance:

* **Asset Variety:**  Provide creative assets of all types and sizes. Monitor the "Ad Strength" metric, aiming for an  **"Excellent"**  rating.  
* **Target Pacing Insights:**  Use these to track progress against CPA/ROAS goals. Avoid overly restrictive targets that limit auction participation.  
* **Search Themes:**  Manually input insights (e.g., when a landing page lacks product depth or during new market launches).  
* **URL Rule Refinement:**  Use "URL Rules" to specify allowed/excluded pages when Final URL Expansion is active.  
* **Exclusion Audits:**  Audit account-level negative keywords and display/video content exclusions specifically within the  **Content Suitability Center** .

###### *Marginal ROI Optimization*

The system utilizes cross-channel bidding (Search, YouTube, Discover, Display) to find the most cost-efficient conversion in real-time. By bidding on inventory predicted to deliver the highest ROI in each auction, the system achieves a lower marginal CPA than single-channel bidding (e.g., spending $10 for 4 conversions at a $2.50 CPA vs. $14 for 4 conversions at a $3.50 CPA on Search only).

##### 2\. Data Management & Conversion Tracking Infrastructure

A robust data foundation is required for AI performance. Execute the following technical checklist.

*   **Step 0: Enable Auto-Tagging:**  Prerequisite for tracking offline conversions with Google Tag or Tag Manager.  
*   **Google Ads Data Manager:**  Connect first-party data (CRM, websites, apps, spreadsheets) via the point-and-click interface. Features built-in  **Confidential Matching**  for privacy-safe data activation.  
*   **Google Tag Gateway:**  Enable sitewide tagging and follow the admin prompt for  **Google Tag Gateway**  to capture up to 14% more conversions.  
*   **Enhanced Conversions for Leads (ECL):**  
* Accept customer data terms in  **Conversions \> Settings** .  
* Enable  **"Enhanced conversions for leads"**  toggle.  
* Configure Tag to include user-provided data (email/phone).  
* Create "Import" action.  **Mandatory:**  Map fields as  **"Converted Leads"**  (sales) or  **"Qualified Leads"**  (marketing/sales qualified) for bidding accuracy.  
* *Note: High performance requires sending both GCID and PII (Personal Identifiable Information) in uploads.*  
* *Note: Expect 2 weeks of bid strategy volatility after switching to primary biddable.*  
*   **Web to App Connect (W2AC):**  Link mobile site traffic to in-app sections to drive a 2.8x higher conversion rate. Accept the recommendation to group app conversions as standard account-level goals.

##### 3\. Creator Partnerships & Brand Collaboration Tools

Standardize workflows for managing relationships via the following Studio and Ads tools.**Creator Partnerships Hub**

* **Discovery:**  Use integrated YouTube creator search (e.g., "pet channels") to identify partners.  
* **Linking:**  Request to link sponsored videos to Google Ads. Once linked, promote as  **"Partnership Ads."**  
* **Analytics:**  Track aggregate and individual metrics (organic/paid views, watch time, engagement) on the new analytics page.**Channel Insights Sharing**  To receive earning opportunities, creators must enable sharing in  **YouTube Studio (Computer)** :  
* Path:  **Settings \> Channel \> Advanced Settings** .  
* Action: Check the box:  **"Allow advertisers, brands, and third-party platforms to view channel analytics for receiving earning opportunities."YouTube Media Kit (YPP-Eligible, Computer Only)**  
* Path:  **"Earn"**  or  **"BrandConnect"**  tab.  
* Customization: Select up to  **5 audience categories**  and  **4 video highlights** .  
* Export: Download as PDF to share with marketing managers.

##### 4\. Advanced Audience Insights & Analytics

###### *Audience Segmentation (YouTube Studio)*

Segment,Definition  
New Viewers,First-time viewers of the channel content.  
Casual Viewers,Watched content in 1–5 months out of the last 12 months.  
Consistent Viewers,Watched content in 6+ months out of the last 12 months.

###### *Advanced Mode (Studio Analytics)*

Utilize the  **"Breakdown"**  feature to group data by traffic source or content part. Use  **"Filters"**  and  **"Add Comparison"**  for side-by-side performance analysis.

###### *Brand Report & Lift Studies*

**WARNING: Brand Report does not support Shopping, Performance Max, or Search campaigns.**

* **Brand Report:**  Measure unique reach and frequency for up to 10,000 campaigns. Slicing available by age, gender, device, and location.  
* **Brand Lift Study (BLS) Setup:**  
* Path:  **Goals \> Measurement \> Lift Measurement** .  
* Eligibility: Video and Demand Gen campaigns.  
* Budget: Requirements updated  **quarterly** . Minimum (e.g., $10k/question in US) must be met over a  **10-day period** , not the total campaign duration.  
* Approval: 24-hour approval; 5-day initial reporting timeline.  
* *Pro Tip: Selecting the "Ad Recall" question provides the highest probability of positive lift.*

##### 5\. Platform Management, Security & Compliance

* **Community Guidelines Training:**  Educational courses can lift channel warnings if the same policy is not violated for  **90 days** . Individual warnings are issued per specific policy violation.  
* **Multi-Party Approval:**  Second-administrator approval is mandatory for adding/removing users or changing roles. Approval must occur within 20 days.  **Note: Read-only roles are exempt from second approval.**  
* **Passkeys (g.co/passkeys):**  Phish-resistant alternative to passwords.  
* **OS Requirements:**  Windows 10+, macOS Ventura+, ChromeOS 109+, or iOS 16+.  
* **Usage:**  There is a  **7-day waiting period**  before a new passkey can confirm sensitive account actions.  
* **Copyright Tab:**  Renamed to  **"Content Detection"**  as of October 21, 2025\.  
* **Mobile App Support:**  Studio app versions 24.04 and earlier lose support on  **February 23, 2026** . Requirements: Android 11.0+ / iOS 17+.

##### 6\. Creative Features & Content Strategy

* **Shorts Creation:**  
* **"Fammi muovere":**  AI photo animation tool (Mobile app only;  **unavailable in EU/UK** ).  
* **Places in Shorts:**  Description tags for featured locations to improve local search discoverability.  
* **Context-Aware Editing:**  Android-specific tool for clip alignment with audio and overlays.  
* **Livestream Engagement:**  
* **Leaderboard:**  Active fans (Super Chat/Stickers) are ranked. Viewers see a  **crown icon**  that updates in real-time. The top 3 fans receive  **temporary badges** .  
* **Automatic Highlights:**  Extracts a Short highlight automatically from mobile livestreams upon broadcast completion.  
* **Dual Streaming:**  Simultaneous horizontal and vertical broadcasting. Horizontal streams are automatically cropped for the vertical Shorts Feed.  
* *Operational Note: Future updates include compatibility with third-party encoders for vertical layouts.*  
* **Inspiration Tab:**  AI-powered brainstorming tool for titles, thumbnails, and concept development, available globally in Studio Desktop.

