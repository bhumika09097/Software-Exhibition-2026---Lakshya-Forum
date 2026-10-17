import { useEffect, useMemo, useState } from "react";
import schemeDataset from "./data/schemes.json";

const schemePresentation = {
  1: {
    category: "education", accent: "blue", nameHi: "कॉलेज और विश्वविद्यालय विद्यार्थियों के लिए केंद्रीय छात्रवृत्ति (PM-USP)",
    ministryHi: "उच्च शिक्षा विभाग, शिक्षा मंत्रालय",
    benefit: "₹12,000/year for the first 3 graduation years; ₹20,000/year at postgraduate level and eligible integrated-course years.",
    benefitHi: "स्नातक के पहले 3 वर्षों में ₹12,000/वर्ष; स्नातकोत्तर और पात्र एकीकृत पाठ्यक्रम वर्षों में ₹20,000/वर्ष।",
    benefitDetailsHi: ["पहले तीन स्नातक वर्षों के लिए ₹12,000/वर्ष (मौजूदा नियम लागू)", "स्नातकोत्तर स्तर के लिए ₹20,000/वर्ष (मौजूदा नियम लागू)", "पात्र पाँच-वर्षीय/एकीकृत पाठ्यक्रम के चौथे और पाँचवें वर्ष के लिए ₹20,000/वर्ष; तकनीकी पाठ्यक्रमों के नियम अलग हो सकते हैं"],
    purposeHi: "कम आय वाले परिवारों के मेधावी विद्यार्थियों को उच्च शिक्षा के दौरान रोज़मर्रा के खर्चों में सहायता। नए आवेदन कक्षा 12 के बोर्ड परिणाम और योजना के नियमों पर आधारित हैं।",
    fit: "A potential fit for a regular degree student whose family income and Class 12 result meet the scheme rules.",
    fitHi: "नियमित डिग्री के विद्यार्थी के लिए विकल्प हो सकता है, यदि परिवार की आय और कक्षा 12 का परिणाम योजना के नियमों से मेल खाए।",
    stepsHi: ["राष्ट्रीय छात्रवृत्ति पोर्टल खोलें", "वन टाइम रजिस्ट्रेशन (OTR) और पोर्टल की ज़रूरी पुष्टि पूरी करें", "योजना का आवेदन और ज़रूरी जानकारी/दस्तावेज़ जमा करें", "संस्थान और पोर्टल की जाँच से जुड़े निर्देशों का पालन करें"],
  },
  2: {
    category: "education", accent: "blue", nameHi: "उत्तर प्रदेश छात्रवृत्ति एवं शुल्क प्रतिपूर्ति",
    ministryHi: "समाज कल्याण / पिछड़ा वर्ग कल्याण / जनजातीय विकास विभाग, उत्तर प्रदेश",
    benefit: "Scholarship or fee reimbursement; the amount varies by scheme, course, category, institution, and academic year.",
    benefitHi: "छात्रवृत्ति या शुल्क प्रतिपूर्ति; राशि योजना, पाठ्यक्रम, वर्ग, संस्थान और शैक्षणिक वर्ष के अनुसार बदलती है।",
    benefitDetailsHi: ["राशि संबंधित योजना, पाठ्यक्रम, वर्ग, संस्थान और मौजूदा शैक्षणिक वर्ष के नियमों पर निर्भर करती है"],
    purposeHi: "उत्तर प्रदेश के पात्र विद्यार्थियों के लिए छात्रवृत्ति और/या शुल्क प्रतिपूर्ति। सही लाभ लागू योजना, पाठ्यक्रम, वर्ग और शैक्षणिक वर्ष पर निर्भर करता है।",
    fit: "A possible option for a student living in Uttar Pradesh; the right scheme depends on course and category.",
    fitHi: "उत्तर प्रदेश में रहने वाले विद्यार्थी के लिए विकल्प हो सकता है; सही योजना पाठ्यक्रम और वर्ग पर निर्भर करती है।",
    stepsHi: ["आधिकारिक उत्तर प्रदेश छात्रवृत्ति पोर्टल खोलें", "लागू प्री-मैट्रिक/पोस्ट-मैट्रिक योजना और वर्ग चुनें", "मौजूदा शैक्षणिक वर्ष के निर्देश पढ़ें", "पंजीकरण करें, फ़ॉर्म भरें और ज़रूरी दस्तावेज़ जमा करें", "संस्थान/विभाग की जाँच और आवेदन की स्थिति देखें"],
  },
  3: {
    category: "farming", accent: "green", nameHi: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
    ministryHi: "कृषि एवं किसान कल्याण विभाग, भारत सरकार",
    benefit: "₹6,000 per year in three installments for eligible landholding farmer families.",
    benefitHi: "पात्र भूमिधारक किसान परिवारों को तीन किस्तों में ₹6,000 प्रति वर्ष।",
    benefitDetailsHi: ["पात्रता और पुष्टि के अधीन, तीन बराबर किस्तों में प्रति वर्ष ₹6,000 की आय सहायता"],
    purposeHi: "पात्र भूमिधारक किसान परिवारों को आय सहायता; योजना की शर्तें और अपवर्जन लागू होते हैं।",
    fit: "For eligible landholding farmer families. Being a farmer alone does not confirm eligibility.",
    fitHi: "पात्र भूमिधारक किसान परिवारों के लिए। केवल किसान होना पात्रता की पुष्टि नहीं करता।",
    stepsHi: ["आधिकारिक PM-KISAN पोर्टल खोलें", "यदि लागू हो तो नया किसान पंजीकरण चुनें", "ज़रूरी पहचान, भूमि और बैंक जानकारी दें", "ई-केवाईसी पूरी करें और राज्य की पुष्टि/स्थिति के निर्देश देखें"],
  },
  4: {
    category: "women", accent: "pink", nameHi: "प्रधानमंत्री उज्ज्वला योजना (PMUY 2.0)",
    ministryHi: "पेट्रोलियम और प्राकृतिक गैस मंत्रालय, भारत सरकार",
    benefit: "A deposit-free LPG connection for eligible women; first-refill and stove benefits are listed under current terms.",
    benefitHi: "पात्र महिलाओं के लिए ज़मानत-मुक्त LPG कनेक्शन; मौजूदा शर्तों के तहत पहला रिफ़िल और चूल्हा भी लाभों में शामिल हैं।",
    benefitDetailsHi: ["मौजूदा योजना नियमों के अनुसार पात्र कनेक्शन उपकरण और स्थापना सहायता", "आधिकारिक जानकारी में पहला रिफ़िल और चूल्हा भी शामिल हैं; मौजूदा आवेदन शर्तें जाँचें"],
    purposeHi: "गरीब परिवारों की पात्र वयस्क महिलाओं को LPG कनेक्शन प्राप्त करने में सहायता।",
    fit: "For an adult woman in an eligible household without an existing household LPG connection.",
    fitHi: "ऐसे पात्र परिवार की वयस्क महिला के लिए, जिसके घर में पहले से LPG कनेक्शन न हो।",
    stepsHi: ["आधिकारिक PMUY पोर्टल या चुने हुए LPG वितरक के ज़रिए आवेदन करें", "KYC और परिवार/पते/बैंक के ज़रूरी दस्तावेज़ दें", "निर्धारित वंचना घोषणा जमा करें", "वितरक की जाँच प्रक्रिया पूरी करें"],
  },
  5: {
    category: "housing", accent: "orange", nameHi: "प्रधानमंत्री आवास योजना – शहरी 2.0 (PMAY-U 2.0)",
    ministryHi: "आवासन और शहरी कार्य मंत्रालय, भारत सरकार",
    benefit: "Support depends on the housing option: up to ₹2.5 lakh for eligible construction cases or up to ₹1.8 lakh interest subsidy in eligible cases.",
    benefitHi: "आवास विकल्प के अनुसार सहायता: पात्र निर्माण मामलों में ₹2.5 लाख तक या पात्र मामलों में ₹1.8 लाख तक ब्याज सब्सिडी।",
    benefitDetailsHi: ["पात्र लाभार्थी-आधारित निर्माण मामलों में ₹2.5 लाख तक की केंद्रीय सहायता; राशि चुने गए विकल्प और नियमों पर निर्भर करती है", "पात्र ब्याज सब्सिडी योजना मामलों में अधिकतम ₹1.8 लाख तक; वास्तविक लाभ ऋण/संपत्ति और मौजूदा नियमों पर निर्भर करता है"],
    purposeHi: "पात्र शहरी परिवारों को घर बनाने, खरीदने या किफ़ायती आवास पाने में अलग-अलग विकल्पों के ज़रिए सहायता।",
    fit: "For eligible urban households; income band, home ownership, and previous housing support also matter.",
    fitHi: "पात्र शहरी परिवारों के लिए; आय की सीमा, घर का स्वामित्व और पहले मिली आवास सहायता भी जाँची जाती है।",
    stepsHi: ["मौजूदा PMAY-U 2.0 दिशानिर्देश पढ़ें", "आधिकारिक PMAY-MIS पोर्टल पर पात्रता देखें", "लागू आवास विकल्प चुनकर आवेदन/मांग प्रक्रिया पूरी करें", "संबंधित प्राधिकरण की जाँच के लिए ज़रूरी जानकारी दें"],
  },
};

const schemeIllustrations = {
  education: {
    src: "/images/students.jpg",
    alt: "Students attending a class at a college in Tamil Nadu, India",
    credit: "Perumalnadar · CC0",
    source: "https://commons.wikimedia.org/wiki/File:Indian_College_Classrooom.jpg",
  },
  farming: {
    src: "/images/farmers.jpg",
    alt: "Farm workers tending a field in Karnataka, India",
    credit: "Ksd5 · CC0",
    source: "https://commons.wikimedia.org/wiki/File:Indian_farmers.jpg",
  },
  women: {
    src: "/images/ujjwala-beneficiary.jpg",
    alt: "President Ram Nath Kovind handing LPG connection documents to a PMUY beneficiary in 2018",
    credit: "President's Secretariat · GODL-India",
    source: "https://commons.wikimedia.org/wiki/File:The_President,_Shri_Ram_Nath_Kovind_handing_over_the_LPG_connection_documents_to_a_beneficiary_under_the_Pradhan_Mantri_Ujjwala_Yojana,_in_Agartala,_Tripura.JPG",
  },
  housing: {
    src: "/images/village-home.jpg",
    alt: "A house in an Indian village",
    credit: "Anuraga arasi · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:A_house_in_a_village,_India_(2022).jpg",
  },
};

const schemes = schemeDataset.schemes.map((scheme) => {
  const presentation = schemePresentation[scheme.id] || {};
  const category = presentation.category || scheme.category.find((item) => ["education", "farming", "women", "housing"].includes(item)) || "education";
  const benefitDetails = scheme.benefits.map((benefit) => {
    const amount = benefit.amount_inr === null ? "" : `₹${new Intl.NumberFormat("en-IN").format(benefit.amount_inr)}${benefit.frequency === "per year" ? "/year" : ""} — `;
    return `${amount}${benefit.condition || benefit.payment_schedule || ""}`;
  });
  return {
    ...scheme,
    ...presentation,
    id: String(scheme.id),
    category,
    sourceCategories: scheme.category,
    name: scheme.name,
    nameHi: presentation.nameHi || scheme.name,
    ministry: scheme.department,
    ministryHi: presentation.ministryHi || scheme.department,
    purposeHi: presentation.purposeHi || scheme.purpose,
    benefit: presentation.benefit || benefitDetails.join(" • "),
    benefitHi: presentation.benefitHi || benefitDetails.join(" • "),
    benefitDetailsHi: presentation.benefitDetailsHi || benefitDetails,
    fit: presentation.fit || "Review the listed requirements and confirm the current rules with the official scheme source.",
    fitHi: presentation.fitHi || "दी गई शर्तें पढ़ें और योजना के आधिकारिक स्रोत से मौजूदा नियमों की पुष्टि करें।",
    missing: scheme.matching_rules.required_profile_fields,
    steps: scheme.application_process,
    benefitDetails,
    stepsHi: presentation.stepsHi || scheme.application_process,
    officialUrl: scheme.official_application_url,
  };
});

const profileOptions = {
  states: ["Andhra Pradesh", "Delhi", "Gujarat", "Karnataka", "Maharashtra", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Other"],
  statesHi: ["आंध्र प्रदेश", "दिल्ली", "गुजरात", "कर्नाटक", "महाराष्ट्र", "राजस्थान", "तमिलनाडु", "उत्तर प्रदेश", "पश्चिम बंगाल", "अन्य"],
  occupations: [
    { value: "student", en: "Student", hi: "विद्यार्थी" },
    { value: "farmer", en: "Farmer", hi: "किसान" },
    { value: "adult_woman", en: "Adult woman applying for my household", hi: "अपने परिवार के लिए आवेदन करने वाली वयस्क महिला" },
    { value: "job_seeker", en: "Job seeker", hi: "रोज़गार की तलाश में" },
    { value: "other", en: "Other", hi: "अन्य" },
  ],
  incomes: [
    { value: "under_3", en: "Under ₹3 lakh", hi: "₹3 लाख से कम" },
    { value: "3_to_4_5", en: "₹3–4.5 lakh", hi: "₹3–4.5 लाख" },
    { value: "4_5_to_6", en: "₹4.5–6 lakh", hi: "₹4.5–6 लाख" },
    { value: "6_to_9", en: "₹6–9 lakh", hi: "₹6–9 लाख" },
    { value: "above_9", en: "Above ₹9 lakh", hi: "₹9 लाख से अधिक" },
    { value: "unsure", en: "Prefer not to say / not sure", hi: "बताना नहीं चाहते / पक्का नहीं" },
  ],
  residences: [
    { value: "urban", en: "Urban", hi: "शहरी" },
    { value: "rural", en: "Rural", hi: "ग्रामीण" },
    { value: "unsure", en: "Not sure", hi: "पक्का नहीं" },
  ],
};

const fieldLabels = {
  en: {
    language: "en",
    age: "Age",
    education_level: "Education level",
    course_mode: "Regular course mode",
    annual_family_income_inr: "Household income",
    class_12_percentile_or_board_rank_status: "Class 12 board result",
    state: "State residence",
    course: "Course",
    category: "Applicant category",
    institution: "Eligible institution",
    occupation: "Occupation",
    owns_or_has_eligible_landholding: "Eligible landholding",
    land_record_status: "Land records",
    income_tax_payer_status: "Income-tax exclusion",
    government_employment_or_exclusion_status: "Government-employment exclusions",
    gender: "Woman applicant",
    household_has_existing_lpg_connection: "Existing household LPG connection",
    poor_household_or_eligible_category: "Eligible household category",
    residence_type: "Urban residence",
    owns_pucca_house_in_india: "Pucca-house ownership",
    received_housing_benefit_in_last_20_years: "Past housing assistance",
    housing_need_or_vertical: "Housing option needed",
  },
  hi: {
    age: "आयु",
    education_level: "शिक्षा का स्तर",
    course_mode: "नियमित पाठ्यक्रम",
    annual_family_income_inr: "परिवार की आय",
    class_12_percentile_or_board_rank_status: "कक्षा 12 का बोर्ड परिणाम",
    state: "राज्य का निवास",
    course: "पाठ्यक्रम",
    category: "आवेदक का वर्ग",
    institution: "पात्र शिक्षण संस्थान",
    occupation: "काम / भूमिका",
    owns_or_has_eligible_landholding: "पात्र भूमि",
    land_record_status: "भूमि रिकॉर्ड",
    income_tax_payer_status: "आयकर से जुड़ा अपवर्जन",
    government_employment_or_exclusion_status: "सरकारी नौकरी से जुड़े अपवर्जन",
    gender: "महिला आवेदक",
    household_has_existing_lpg_connection: "घर में पहले से LPG कनेक्शन",
    poor_household_or_eligible_category: "पात्र परिवार का वर्ग",
    residence_type: "शहरी निवास",
    owns_pucca_house_in_india: "पक्के घर का स्वामित्व",
    received_housing_benefit_in_last_20_years: "पहले मिली आवास सहायता",
    housing_need_or_vertical: "ज़रूरी आवास विकल्प",
  },
};

const copy = {
  en: {
    navHow: "How it works",
    navSchemes: "Explore schemes",
    navAbout: "About us",
    publicServiceEyebrow: "PUBLIC SERVICE, REAL PEOPLE",
    publicServiceTitle: "Public service belongs to everyone.",
    publicServiceText: "Official portraits for context, alongside real people and communities featured in public-service photography.",
    primeMinisterRole: "Prime Minister of India",
    presidentRole: "President of India",
    leadershipDisclaimer: "Independent discovery guide · Not affiliated with or endorsed by the Government of India",
    signIn: "My profile",
    eyebrow: "GOOD TO KNOW. EVEN BETTER TO GET.",
    heroTitle: "The right support,\nfor your next step.",
    heroText: "Tell us a little about yourself. We'll help you find government schemes that fit, understand what's missing, and figure out what to do next.",
    searchPlaceholder: "Try “support for farmers” or “student scholarship”",
    searchButton: "Find my schemes",
    advisorTag: "YOUR PERSONAL SCHEME ADVISOR",
    cardMatches: "schemes to review",
    cardBased: "Add a few details to start your screening",
    profileButton: "Build my profile",
    profileReady: "Your profile, your matches",
    profileIncomplete: "A few details can make your matches more personal.",
    profileComplete: "Your details are saved for this visit.",
    profileFields: "Profile details",
    profileNudge: "Add a few details to make recommendations more personal.",
    exploreEyebrow: "A GOOD PLACE TO START",
    exploreTitle: "Support that fits your life.",
    exploreText: "Explore a few examples, or search for something specific. Each match comes with a reason, not just a link.",
    searchLabel: "Search schemes",
    all: "All schemes",
    results: "schemes to explore",
    seeDetails: "See details",
    hideDetails: "Hide details",
    seeMore: "See more schemes",
    showLess: "Show fewer schemes",
    allSchemesTitle: "Explore all schemes",
    allSchemesText: "Browse every scheme in the guide and open any one for full details.",
    backToSchemes: "Back to schemes",
    backHome: "Back to home",
    matchLabel: "INITIAL SCREENING",
    statusPotential: "Potential match",
    statusNeeds: "Needs verification",
    statusIncomplete: "Profile needed",
    statusNoMatch: "Does not match known rules",
    profileNeededReason: "Complete your profile to see which details match and what still needs checking.",
    potentialReason: "Your details match some starting conditions. Check the remaining requirements before applying.",
    noMatchReason: "Based on the details shared, a key starting condition does not appear to fit. Review the official rules for exceptions.",
    notMet: "Does not match",
    matched: "Matches",
    stillVerify: "Still to verify",
    profileTitle: "Check which schemes may fit you",
    profileIntro: "Answer what you know. Choose “Not sure” or leave a field blank when needed—we’ll show where more information is required.",
    checkEligibility: "Check my eligibility",
    editProfile: "Edit my answers",
    matchResults: "Your scheme results",
    resultSummary: "Potential matches are based only on the answers and rules currently available.",
    potentialCount: "potential matches",
    needsCount: "need verification",
    noMatchCount: "do not match known rules",
    allResults: "All results",
    recommended: "Worth exploring",
    onlyPotential: "Potential matches",
    studentCondition: "Student",
    incomeCondition: "Annual family income within scheme limit",
    courseCondition: "Regular degree course",
    class12Condition: "Class 12 result above the 80th percentile",
    otherScholarshipCondition: "Not receiving another scholarship or fee waiver",
    institutionCondition: "Institution recognition and course details",
    stateCondition: "Uttar Pradesh residence",
    upSchemeCondition: "Applicable UP scheme, course and category",
    farmerCondition: "Farmer",
    landCondition: "Eligible landholding",
    landRecordCondition: "Land records",
    taxCondition: "Not in the listed income-tax exclusion",
    employmentCondition: "Not in the listed government-employment exclusions",
    womanCondition: "Woman applicant",
    ageCondition: "At least 18 years old",
    scholarshipAgeCondition: "Age details provided (confirm current scheme rules)",
    noLpgCondition: "No existing household LPG connection",
    poorHouseholdCondition: "Eligible household category",
    urbanCondition: "Urban residence",
    incomeBandCondition: "Household income within a PMAY-U 2.0 band",
    noHouseCondition: "No pucca house owned in India",
    noPriorHousingCondition: "No housing benefit in the previous 20 years",
    selectRole: "Select all that apply",
    ageLabel: "Age (years)",
    agePlaceholder: "Enter age",
    incomeExactLabel: "Approx. annual household income (₹)",
    incomeExactPlaceholder: "Enter amount, e.g. 350000",
    courseModeLabel: "Is your course a regular degree course?",
    yes: "Yes",
    no: "No",
    notSure: "Not sure",
    class12Label: "Did you score above the 80th percentile in Class 12 for your board and stream?",
    scholarshipLabel: "Are you receiving another scholarship, fee waiver or reimbursement?",
    landLabel: "Does your farmer family have eligible landholding?",
    landRecordLabel: "Are the land records available and current?",
    incomeTaxLabel: "Does an income-tax exclusion apply to anyone in the farmer family?",
    governmentJobLabel: "Does a government-employment or other PM-KISAN exclusion apply?",
    lpgLabel: "Does anyone in your household already have an LPG connection?",
    poorHouseholdLabel: "Does the household meet a listed PMUY category or poor-household rule?",
    ownsHouseLabel: "Does anyone in the family own a pucca house anywhere in India?",
    priorHousingLabel: "Was the household allotted a home under another housing scheme in the last 20 years?",
    answerConditions: "Scheme-specific questions",
    basicProfile: "Your basic details",
    whyMatch: "Why this may fit",
    missingLabel: "Still to check",
    compare: "Compare",
    selected: "Selected",
    compareTitle: "A clearer side-by-side",
    compareHint: "Pick up to 3 schemes to compare what matters to you.",
    benefitLabel: "What it offers",
    compareBy: "Compare by",
    purposeLabel: "About this scheme",
    fitLabel: "Why it may fit",
    gapsLabel: "What to check",
    stepsLabel: "Your first steps",
    compareAction: "Compare schemes",
    clearAll: "Clear all",
    matchedLabel: "Why SchemeSathi",
    matchedTitle: "More than a list of links.",
    matchedText: "Government schemes can be hard to navigate. We make each next step easier to understand.",
    value1Title: "Know why it matches",
    value1Text: "See which of your details line up with a scheme, in plain language.",
    value2Title: "Know what's missing",
    value2Text: "Spot the conditions or details to check before you apply.",
    value3Title: "Know what to do next",
    value3Text: "Follow a practical checklist, one step at a time.",
    value4Title: "Choose with confidence",
    value4Text: "Compare benefits and requirements side by side.",
    finalTitle: "A better start is one small detail away.",
    finalText: "Build your profile to get a clearer picture of the support that could fit you.",
    startNow: "Personalize my matches",
    footerNote: "A clearer path to the support you deserve.",
    footerDisclaimer: "This is a preliminary screening aid, not an official eligibility decision. Verify current rules on official government portals.",
    demo: "Schemes in this guide",
    profileTitle: "Check which schemes may fit you",
    profileIntro: "Answer what you know. Choose “Not sure” or leave a field blank when needed—we’ll show where more information is required.",
    stateLabel: "Where do you live?",
    statePlaceholder: "Select a state or union territory",
    occupationLabel: "What best describes you?",
    occupationPlaceholder: "Select your work or role",
    incomeLabel: "Approx. annual household income",
    incomePlaceholder: "Select an income range",
    residenceLabel: "Do you live in an urban or rural area?",
    residencePlaceholder: "Select an area",
    profileTip: "Your answers stay in this page session. Never enter Aadhaar numbers, bank details, passwords, or upload identity documents.",
    saveProfile: "Save my details",
    cancel: "Not now",
    close: "Close",
    profileSaved: "Profile saved for this visit",
    noResults: "No schemes found",
    noResultsHint: "Try a different search or choose another category.",
    compareNeedMore: "Choose at least 2 schemes to compare.",
    compareMax: "You can compare up to 3 schemes at a time.",
    home: "Home",
    officialPortal: "Open official portal",
    documentsLabel: "Documents to prepare",
    eligibilityLabel: "Eligibility rules from scheme data",
    officialSourcesLabel: "Official sources",
    moreToCheck: "Review current rules and exclusions",
    checklistProgress: "Complete",
    dataVerified: "Scheme data last reviewed",
    states: ["Andhra Pradesh", "Delhi", "Gujarat", "Karnataka", "Maharashtra", "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Other"],
    profileRoleLabel: "Which best describes you?",
    rolePlaceholder: "Choose one",
    incomeOptions: ["Under ₹3 lakh", "₹3–4.5 lakh", "₹4.5–6 lakh", "₹6–9 lakh", "Above ₹9 lakh", "Prefer not to say / not sure"],
    residences: ["Urban", "Rural", "Not sure"],
  },
  hi: {
    language: "hi",
    navHow: "यह कैसे काम करता है",
    navSchemes: "योजनाएँ देखें",
    navAbout: "हमारे बारे में",
    publicServiceEyebrow: "जनसेवा, असली लोग",
    publicServiceTitle: "जनसेवा सबके लिए है।",
    publicServiceText: "संदर्भ के लिए आधिकारिक चित्रों के साथ जनसेवा से जुड़े लोगों और समुदायों की असली तस्वीरें।",
    primeMinisterRole: "भारत के प्रधानमंत्री",
    presidentRole: "भारत की राष्ट्रपति",
    leadershipDisclaimer: "स्वतंत्र योजना खोज गाइड · भारत सरकार से संबद्ध या समर्थित नहीं",
    signIn: "मेरी प्रोफ़ाइल",
    eyebrow: "सही जानकारी। सही समय पर सहायता।",
    heroTitle: "आपके अगले कदम के लिए,\nसही सरकारी सहायता।",
    heroText: "अपने बारे में थोड़ी जानकारी दें। हम आपके लिए सही सरकारी योजनाएँ ढूँढ़ेंगे, बताएँगे कि क्या जानकारी बाकी है और आगे क्या करना है।",
    searchPlaceholder: "“किसानों की सहायता” या “छात्रवृत्ति” खोजें",
    searchButton: "मेरी योजनाएँ खोजें",
    advisorTag: "आपका व्यक्तिगत योजना सलाहकार",
    cardMatches: "योजनाएँ जाँचने के लिए",
    cardBased: "जाँच शुरू करने के लिए कुछ जानकारी दें",
    profileButton: "मेरी प्रोफ़ाइल बनाएँ",
    profileReady: "आपकी प्रोफ़ाइल, आपके विकल्प",
    profileIncomplete: "कुछ और जानकारी से सुझाव आपके लिए बेहतर हो सकते हैं।",
    profileComplete: "इस विज़िट के लिए आपकी जानकारी सेव है।",
    profileFields: "प्रोफ़ाइल की जानकारी",
    profileNudge: "सुझावों को आपके लिए बेहतर बनाने के लिए कुछ जानकारी दें।",
    exploreEyebrow: "शुरुआत यहाँ से करें",
    exploreTitle: "आपकी ज़िंदगी के लिए सही सहायता।",
    exploreText: "उदाहरण देखें या कोई खास योजना खोजें। हर सुझाव के साथ कारण भी मिलेगा, सिर्फ़ लिंक नहीं।",
    searchLabel: "योजनाएँ खोजें",
    all: "सभी योजनाएँ",
    results: "योजनाएँ देखने के लिए",
    seeDetails: "पूरी जानकारी देखें",
    hideDetails: "जानकारी छिपाएँ",
    seeMore: "और योजनाएँ देखें",
    showLess: "कम योजनाएँ दिखाएँ",
    allSchemesTitle: "सभी योजनाएँ देखें",
    allSchemesText: "इस गाइड की सभी योजनाएँ देखें और किसी एक को चुनकर उसकी पूरी जानकारी खोलें।",
    backToSchemes: "योजनाओं पर वापस जाएँ",
    backHome: "होम पर वापस जाएँ",
    matchLabel: "शुरुआती जाँच",
    statusPotential: "संभावित मेल",
    statusNeeds: "पुष्टि ज़रूरी",
    statusIncomplete: "जानकारी दें",
    statusNoMatch: "ज्ञात नियमों से मेल नहीं",
    profileNeededReason: "कौन-सी जानकारी मेल खाती है और क्या जाँचना बाकी है, यह देखने के लिए प्रोफ़ाइल भरें।",
    potentialReason: "आपकी जानकारी कुछ शुरुआती शर्तों से मेल खाती है। आवेदन से पहले बाकी शर्तें जाँचें।",
    noMatchReason: "दी गई जानकारी के आधार पर एक ज़रूरी शुरुआती शर्त मेल नहीं खाती। छूट या अपवाद के लिए आधिकारिक नियम देखें।",
    notMet: "मेल नहीं",
    matched: "मेल खाता है",
    stillVerify: "पुष्टि बाकी",
    profileTitle: "जानें, कौन-सी योजनाएँ आपके लिए हो सकती हैं",
    profileIntro: "जो जानकारी पता है, वह भरें। बाकी के लिए “पक्का नहीं” चुनें या खाली छोड़ें—हम बताएँगे कि क्या जाँचना बाकी है।",
    checkEligibility: "मेरी पात्रता जाँचें",
    editProfile: "मेरी जानकारी बदलें",
    matchResults: "आपके योजना परिणाम",
    resultSummary: "संभावित मेल आपके जवाबों और अभी उपलब्ध नियमों पर आधारित हैं।",
    potentialCount: "संभावित मेल",
    needsCount: "पुष्टि ज़रूरी",
    noMatchCount: "ज्ञात नियमों से मेल नहीं",
    allResults: "सभी परिणाम",
    recommended: "देखने योग्य योजनाएँ",
    onlyPotential: "संभावित मेल",
    studentCondition: "विद्यार्थी",
    incomeCondition: "परिवार की सालाना आय योजना की सीमा में",
    courseCondition: "नियमित डिग्री पाठ्यक्रम",
    class12Condition: "कक्षा 12 में 80वें पर्सेंटाइल से ऊपर परिणाम",
    otherScholarshipCondition: "दूसरी छात्रवृत्ति या शुल्क छूट नहीं मिल रही",
    institutionCondition: "संस्थान की मान्यता और पाठ्यक्रम की जानकारी",
    stateCondition: "उत्तर प्रदेश का निवास",
    upSchemeCondition: "लागू UP योजना, पाठ्यक्रम और वर्ग",
    farmerCondition: "किसान",
    landCondition: "पात्र भूमिधारक",
    landRecordCondition: "भूमि रिकॉर्ड",
    taxCondition: "सूचीबद्ध आयकर अपवर्जन लागू नहीं",
    employmentCondition: "सूचीबद्ध सरकारी-नौकरी अपवर्जन लागू नहीं",
    womanCondition: "महिला आवेदक",
    ageCondition: "कम से कम 18 वर्ष की आयु",
    scholarshipAgeCondition: "आयु की जानकारी दी गई (मौजूदा नियम जाँचें)",
    noLpgCondition: "घर में पहले से LPG कनेक्शन नहीं",
    poorHouseholdCondition: "पात्र परिवार का वर्ग",
    urbanCondition: "शहरी निवास",
    incomeBandCondition: "परिवार की आय PMAY-U 2.0 सीमा में",
    noHouseCondition: "भारत में परिवार के नाम पक्का घर नहीं",
    noPriorHousingCondition: "पिछले 20 वर्षों में आवास योजना का लाभ नहीं",
    selectRole: "जो लागू हों, वे सभी चुनें",
    ageLabel: "आयु (वर्ष)",
    agePlaceholder: "आयु लिखें",
    incomeExactLabel: "परिवार की अनुमानित सालाना आय (₹)",
    incomeExactPlaceholder: "राशि लिखें, जैसे 350000",
    courseModeLabel: "क्या आपका पाठ्यक्रम नियमित डिग्री है?",
    yes: "हाँ",
    no: "नहीं",
    notSure: "पक्का नहीं",
    class12Label: "क्या कक्षा 12 में आपके बोर्ड और स्ट्रीम के 80वें पर्सेंटाइल से ऊपर अंक थे?",
    scholarshipLabel: "क्या आपको दूसरी छात्रवृत्ति, शुल्क छूट या प्रतिपूर्ति मिलती है?",
    landLabel: "क्या किसान परिवार के पास पात्र भूमिधारक है?",
    landRecordLabel: "क्या भूमि रिकॉर्ड उपलब्ध और मौजूदा हैं?",
    incomeTaxLabel: "क्या किसान परिवार में किसी पर आयकर से जुड़ा अपवर्जन लागू है?",
    governmentJobLabel: "क्या सरकारी नौकरी या PM-KISAN का अन्य अपवर्जन लागू है?",
    lpgLabel: "क्या आपके परिवार में किसी के पास पहले से LPG कनेक्शन है?",
    poorHouseholdLabel: "क्या परिवार PMUY की सूचीबद्ध श्रेणी या गरीब परिवार के नियम में आता है?",
    ownsHouseLabel: "क्या परिवार में किसी के नाम भारत में पक्का घर है?",
    priorHousingLabel: "क्या पिछले 20 साल में किसी अन्य आवास योजना के तहत घर मिला है?",
    answerConditions: "योजना के अनुसार कुछ सवाल",
    basicProfile: "आपकी शुरुआती जानकारी",
    whyMatch: "यह आपके लिए क्यों उपयोगी हो सकती है",
    missingLabel: "अभी क्या जाँचें",
    compare: "तुलना करें",
    selected: "चुनी गई",
    compareTitle: "योजनाओं की साथ-साथ तुलना",
    compareHint: "अपनी ज़रूरत के अनुसार तुलना के लिए 3 तक योजनाएँ चुनें।",
    benefitLabel: "क्या सहायता मिलती है",
    compareBy: "तुलना का आधार",
    purposeLabel: "योजना के बारे में",
    fitLabel: "आपके लिए क्यों उपयोगी हो सकती है",
    gapsLabel: "क्या जाँचें",
    stepsLabel: "आपके शुरुआती कदम",
    compareAction: "योजनाओं की तुलना करें",
    clearAll: "चयन हटाएँ",
    matchedLabel: "SchemeSathi क्यों",
    matchedTitle: "सिर्फ़ योजनाओं की सूची नहीं।",
    matchedText: "सरकारी योजनाओं को समझना मुश्किल हो सकता है। हम अगला कदम आसान भाषा में बताते हैं।",
    value1Title: "जानें सुझाव क्यों मिला",
    value1Text: "देखें कि आपकी कौन-सी जानकारी योजना के नियमों से मेल खाती है।",
    value2Title: "जानें क्या बाकी है",
    value2Text: "आवेदन से पहले जाँचने वाली शर्तें और जानकारी पहचानें।",
    value3Title: "जानें आगे क्या करें",
    value3Text: "एक-एक कदम करके आसान चेकलिस्ट पूरी करें।",
    value4Title: "तुलना करके चुनें",
    value4Text: "लाभ और ज़रूरी शर्तों को एक साथ देखें।",
    finalTitle: "बेहतर शुरुआत के लिए बस थोड़ी जानकारी चाहिए।",
    finalText: "अपनी प्रोफ़ाइल बनाएँ और जानें कि आपके लिए कौन-सी सहायता सही हो सकती है।",
    startNow: "मेरे सुझाव बेहतर बनाएँ",
    footerNote: "आपके हक़ की सहायता तक पहुँचने का आसान रास्ता।",
    footerDisclaimer: "यह शुरुआती जाँच में मदद है, आधिकारिक पात्रता का फ़ैसला नहीं। मौजूदा नियम सरकारी पोर्टल पर ज़रूर जाँचें।",
    demo: "इस गाइड की योजनाएँ",
    profileTitle: "जानें, कौन-सी योजनाएँ आपके लिए हो सकती हैं",
    profileIntro: "जो जानकारी पता है, वह भरें। बाकी के लिए “पक्का नहीं” चुनें या खाली छोड़ें—हम बताएँगे कि क्या जाँचना बाकी है।",
    stateLabel: "आप कहाँ रहते हैं?",
    statePlaceholder: "राज्य या केंद्र शासित प्रदेश चुनें",
    occupationLabel: "आपकी भूमिका क्या है?",
    occupationPlaceholder: "अपना काम या भूमिका चुनें",
    incomeLabel: "परिवार की अनुमानित सालाना आय",
    incomePlaceholder: "आय की सीमा चुनें",
    residenceLabel: "आप शहरी या ग्रामीण क्षेत्र में रहते हैं?",
    residencePlaceholder: "क्षेत्र चुनें",
    profileTip: "आपकी जानकारी इसी पेज सेशन में रहती है। आधार नंबर, बैंक जानकारी, पासवर्ड न दें और पहचान के दस्तावेज़ अपलोड न करें।",
    saveProfile: "मेरी जानकारी सेव करें",
    cancel: "अभी नहीं",
    close: "बंद करें",
    profileSaved: "इस विज़िट के लिए प्रोफ़ाइल सेव है",
    noResults: "कोई योजना नहीं मिली",
    noResultsHint: "दूसरे शब्दों से खोजें या कोई और श्रेणी चुनें।",
    compareNeedMore: "तुलना के लिए कम से कम 2 योजनाएँ चुनें।",
    compareMax: "एक बार में 3 योजनाओं की तुलना कर सकते हैं।",
    home: "मुखपृष्ठ",
    officialPortal: "आधिकारिक पोर्टल खोलें",
    documentsLabel: "तैयार रखने के दस्तावेज़",
    eligibilityLabel: "योजना के डेटा में पात्रता नियम",
    officialSourcesLabel: "आधिकारिक स्रोत",
    moreToCheck: "मौजूदा नियम और अपवर्जन जाँचें",
    checklistProgress: "पूरे",
    dataVerified: "योजना की जानकारी की आख़िरी जाँच",
    states: ["आंध्र प्रदेश", "दिल्ली", "गुजरात", "कर्नाटक", "महाराष्ट्र", "राजस्थान", "तमिलनाडु", "उत्तर प्रदेश", "पश्चिम बंगाल", "अन्य"],
    profileRoleLabel: "आपकी स्थिति क्या है?",
    rolePlaceholder: "एक विकल्प चुनें",
    incomeOptions: ["₹3 लाख से कम", "₹3–4.5 लाख", "₹4.5–6 लाख", "₹6–9 लाख", "₹9 लाख से अधिक", "बताना नहीं चाहते / पक्का नहीं"],
    residences: ["शहरी", "ग्रामीण", "पक्का नहीं"],
  },
};

const categories = ["all", "education", "farming", "women", "housing"];
const categoryText = {
  en: { all: "All schemes", farming: "Farming", education: "Education", housing: "Housing", women: "Women & family" },
  hi: { all: "सभी योजनाएँ", farming: "किसान", education: "शिक्षा", housing: "आवास", women: "महिला एवं परिवार" },
};

function evaluateScheme(scheme, profile, text, language) {
  const fieldName = (field) => fieldLabels[language][field] || field.replaceAll("_", " ");
  if (!profile.submitted) return {
    status: "incomplete",
    matched: [],
    unmet: [],
    missing: scheme.missing.map(fieldName),
  };

  const checks = [];
  const add = (label, value) => checks.push({ label, value });
  const yesNo = (value) => value === "yes" ? true : value === "no" ? false : null;
  const income = profile.annualIncome === "" ? null : Number(profile.annualIncome);

  if (scheme.id === "1") {
    add(text.studentCondition, profile.roles.length ? profile.roles.includes("student") : null);
    add(text.scholarshipAgeCondition, profile.age === "" ? null : true);
    add(text.incomeCondition, income === null ? null : income <= 450000);
    add(text.courseCondition, profile.courseMode === "regular" ? true : profile.courseMode === "other" ? false : null);
    add(text.class12Condition, yesNo(profile.class12Percentile));
    add(text.otherScholarshipCondition, profile.otherScholarship === "no" ? true : profile.otherScholarship === "yes" ? false : null);
    add(text.institutionCondition, null);
  } else if (scheme.id === "2") {
    add(text.studentCondition, profile.roles.length ? profile.roles.includes("student") : null);
    add(text.stateCondition, profile.state ? profile.state === "Uttar Pradesh" : null);
    add(text.upSchemeCondition, null);
  } else if (scheme.id === "3") {
    add(text.farmerCondition, profile.roles.length ? profile.roles.includes("farmer") : null);
    add(text.landCondition, yesNo(profile.eligibleLand));
    add(text.landRecordCondition, profile.landRecord === "yes" ? true : profile.landRecord === "no" ? false : null);
    add(text.taxCondition, profile.incomeTax === "no" ? true : profile.incomeTax === "yes" ? false : null);
    add(text.employmentCondition, profile.govExclusion === "no" ? true : profile.govExclusion === "yes" ? false : null);
  } else if (scheme.id === "4") {
    add(text.womanCondition, profile.roles.length ? profile.roles.includes("adult_woman") : null);
    add(text.ageCondition, profile.age === "" ? null : Number(profile.age) >= 18);
    add(text.noLpgCondition, profile.existingLpg === "no" ? true : profile.existingLpg === "yes" ? false : null);
    add(text.poorHouseholdCondition, yesNo(profile.eligibleHousehold));
  } else if (scheme.id === "5") {
    add(text.urbanCondition, profile.residence === "urban" ? true : profile.residence === "rural" ? false : null);
    add(text.incomeBandCondition, income === null ? null : income <= 900000);
    add(text.noHouseCondition, profile.ownsHouse === "no" ? true : profile.ownsHouse === "yes" ? false : null);
    add(text.noPriorHousingCondition, profile.priorHousing === "no" ? true : profile.priorHousing === "yes" ? false : null);
  } else {
    return {
      status: "needs",
      matched: [],
      unmet: [],
      missing: scheme.missing.map(fieldName),
    };
  }

  const matched = checks.filter((check) => check.value === true).map((check) => check.label);
  const unmet = checks.filter((check) => check.value === false).map((check) => check.label);
  const missing = checks.filter((check) => check.value === null).map((check) => check.label);
  const status = unmet.length ? "no-match" : missing.length ? "needs" : "potential";
  return { status, matched, unmet, missing };
}

function screeningStatus(scheme, profile, text, language) {
  return evaluateScheme(scheme, profile, text, language).status;
}

function missingProfileFields(scheme, profile, text, language) {
  return evaluateScheme(scheme, profile, text, language).missing;
}

function readableField(field, language) {
  return fieldLabels[language][field] || field.replaceAll("_", " ");
}

function optionLabel(group, value, language) {
  if (!value) return "";
  if (group === "states") {
    const index = profileOptions.states.indexOf(value);
    return (language === "hi" ? profileOptions.statesHi : profileOptions.states)[index] || value;
  }
  const option = profileOptions[group].find((item) => item.value === value);
  return option?.[language] || value;
}

function statusLabel(status, text) {
  if (status === "potential") return text.statusPotential;
  if (status === "no-match") return text.statusNoMatch;
  if (status === "incomplete") return text.statusIncomplete;
  return text.statusNeeds;
}

function reasonText(evaluation, text, language, scheme) {
  if (evaluation.status === "incomplete") return text.profileNeededReason;
  if (evaluation.status === "potential") return text.potentialReason;
  if (evaluation.unmet.length) return `${text.notMet}: ${evaluation.unmet.join(", ")}.`;
  if (evaluation.matched.length) return `${text.matched}: ${evaluation.matched.join(", ")}. ${text.stillVerify}: ${evaluation.missing.join(", ")}.`;
  return language === "hi" ? scheme.fitHi : scheme.fit;
}

function eligibilityEntries(eligibility) {
  return Object.entries(eligibility)
    .filter(([key]) => key !== "note")
    .map(([key, value]) => ({
      label: key.replaceAll("_", " "),
      value: Array.isArray(value) ? value.join("; ") : typeof value === "object" ? JSON.stringify(value) : String(value),
    }));
}

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.4 4.4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1 1-2.5Z" /></>,
    list: <><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function AnswerSelect({ label, value, onChange, text, options = null }) {
  return <label className="answer-field">{label}
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{text.notSure}</option>
      {(options || [
        { value: "yes", label: text.yes },
        { value: "no", label: text.no },
        { value: "unsure", label: text.notSure },
      ]).map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
    </select>
  </label>;
}

function App() {
  const [language, setLanguage] = useState("en");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const emptyProfile = { submitted: false, state: "", roles: [], age: "", annualIncome: "", residence: "", courseMode: "", class12Percentile: "", otherScholarship: "", eligibleLand: "", landRecord: "", incomeTax: "", govExclusion: "", existingLpg: "", eligibleHousehold: "", ownsHouse: "", priorHousing: "" };
  const [profile, setProfile] = useState(emptyProfile);
  const [draft, setDraft] = useState(emptyProfile);
  const [notice, setNotice] = useState("");
  const [checkedSteps, setCheckedSteps] = useState({});
  const [resultFilter, setResultFilter] = useState("recommended");

  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi" : "en";
  }, [language]);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPath]);

  const t = copy[language];
  const matches = useMemo(() => {
    const search = query.trim().toLowerCase();
    return schemes.filter((scheme) => {
      const categoryMatch = category === "all" || scheme.category === category;
      const words = [scheme.name, scheme.nameHi, scheme.purpose, scheme.purposeHi, categoryText[language][scheme.category], scheme.ministry, scheme.ministryHi, scheme.benefit, scheme.benefitHi].join(" ").toLowerCase();
      return categoryMatch && (!search || words.includes(search));
    }).sort((left, right) => {
      const priority = { potential: 0, needs: 1, incomplete: 2, "no-match": 3 };
      return priority[screeningStatus(left, profile, t, language)] - priority[screeningStatus(right, profile, t, language)];
    });
  }, [category, language, profile, query, t]);
  const resultCounts = useMemo(() => schemes.reduce((counts, scheme) => {
    counts[screeningStatus(scheme, profile, t, language)] += 1;
    return counts;
  }, { potential: 0, needs: 0, incomplete: 0, "no-match": 0 }), [profile, t]);
  const isBrowsePage = currentPath.replace(/\/+$/, "") === "/schemes";
  const visibleMatches = isBrowsePage || resultFilter === "all" ? matches : resultFilter === "recommended"
    ? matches.filter((scheme) => ["potential", "needs", "incomplete"].includes(screeningStatus(scheme, profile, t, language)))
    : matches.filter((scheme) => screeningStatus(scheme, profile, t, language) === resultFilter);
  const chosenSchemes = selected.map((id) => schemes.find((scheme) => scheme.id === id)).filter(Boolean);
  const routeMatch = currentPath.match(/^\/schemes\/([^/]+)\/?$/);
  const detailScheme = routeMatch ? schemes.find((scheme) => scheme.id === decodeURIComponent(routeMatch[1])) : null;

  function navigateTo(path) {
    const destination = new URL(path, window.location.origin);
    window.history.pushState({}, "", destination);
    setCurrentPath(window.location.pathname);
    if (destination.hash) {
      window.setTimeout(() => document.querySelector(destination.hash)?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }

  function toggleCompare(id) {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= 3) {
        setNotice(t.compareMax);
        window.setTimeout(() => setNotice(""), 3200);
        return current;
      }
      return [...current, id];
    });
  }

  function openProfile() {
    setDraft({ ...profile, roles: [...profile.roles] });
    setProfileOpen(true);
  }

  function saveProfile(event) {
    event.preventDefault();
    const nextProfile = { ...draft, roles: [...draft.roles], submitted: true };
    setProfile(nextProfile);
    setResultFilter("recommended");
    setProfileOpen(false);
    window.setTimeout(() => document.getElementById("schemes")?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  function toggleRole(role) {
    setDraft((current) => ({
      ...current,
      roles: current.roles.includes(role)
        ? current.roles.filter((item) => item !== role)
        : [...current.roles, role],
    }));
  }

  function toggleStep(schemeId, stepIndex) {
    const key = `${schemeId}:${stepIndex}`;
    setCheckedSteps((current) => ({ ...current, [key]: !current[key] }));
  }

  function showComparison() {
    if (selected.length < 2) {
      setNotice(t.compareNeedMore);
      window.setTimeout(() => setNotice(""), 3200);
      return;
    }
    setCompareOpen(true);
  }

  if (detailScheme) {
    const evaluation = evaluateScheme(detailScheme, profile, t, language);
    const illustration = schemeIllustrations[detailScheme.category];
    return (
      <div className="app-shell scheme-detail-page">
        <header className="site-header">
          <a className="brand" href="/" onClick={(event) => { event.preventDefault(); navigateTo("/"); }}><span className="brand-mark"><span /><span /><span /></span><span className="brand-name">scheme<span>sathi</span></span></a>
          <div className="header-actions">
            <div className="language-switch" role="group" aria-label="Choose language">
              <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button><span />
              <button className={language === "hi" ? "active" : ""} onClick={() => setLanguage("hi")} aria-pressed={language === "hi"}>हि</button>
            </div>
          </div>
        </header>
        <main className="scheme-detail-main page-width">
          <button className="back-link" onClick={() => navigateTo("/#schemes")}><Icon name="arrow" size={16} />{t.backToSchemes}</button>
          <div className="scheme-detail-heading">
            <div className="eyebrow section-eyebrow">{categoryText[language][detailScheme.category]}</div>
            <h1>{language === "hi" ? detailScheme.nameHi : detailScheme.name}</h1>
            <p>{language === "hi" ? detailScheme.ministryHi : detailScheme.ministry}</p>
            <span className={`screening-status screening-${evaluation.status}`}>{statusLabel(evaluation.status, t)}</span>
          </div>
          <div className="scheme-detail-layout">
            <div className="scheme-detail-primary">
              <figure className={`scheme-illustration illustration-${detailScheme.category}`}>
                <a className="scheme-photo-link" href={illustration.source} target="_blank" rel="noreferrer">
                  <img src={illustration.src} alt={illustration.alt} width="960" height="540" />
                </a>
                <figcaption><a href={illustration.source} target="_blank" rel="noreferrer">Photo: {illustration.credit}</a></figcaption>
              </figure>
              <section className="detail-panel">
                <h2>{t.whyMatch}</h2>
                <p>{reasonText(evaluation, t, language, detailScheme)}</p>
                <h3>{t.missingLabel}</h3>
                {evaluation.unmet.length > 0 && <><h4>{t.notMet}</h4><div className="missing-tags">{evaluation.unmet.map((item) => <span className="missing-tag unmet-tag" key={item}>{item}</span>)}</div></>}
                {evaluation.missing.length > 0 && <div className="missing-tags">{evaluation.missing.map((item) => <span className="missing-tag" key={item}>{item}</span>)}</div>}
                {!evaluation.unmet.length && !evaluation.missing.length && <div className="missing-tags"><span className="missing-tag">{t.moreToCheck}</span></div>}
              </section>
              <section className="detail-panel">
                <h2>{t.purposeLabel}</h2>
                <p>{language === "hi" ? detailScheme.purposeHi : detailScheme.purpose}</p>
                <h3>{t.benefitLabel}</h3>
                <ul>{(language === "hi" ? detailScheme.benefitDetailsHi : detailScheme.benefitDetails).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
              </section>
              <section className="detail-panel">
                <h2>{t.documentsLabel}</h2>
                <ul>{detailScheme.documents.map((document) => <li key={document}>{document}</li>)}</ul>
              </section>
              <section className="detail-panel">
                <h2>{t.eligibilityLabel}</h2>
                <dl className="detail-eligibility">{eligibilityEntries(detailScheme.eligibility).map((entry) => <div key={entry.label}><dt>{entry.label}</dt><dd>{entry.value}</dd></div>)}</dl>
              </section>
              <section className="detail-panel">
                <h2>{t.stepsLabel}</h2>
                <ol className="checklist detail-checklist">{detailScheme.steps.map((step, index) => {
                  const key = `${detailScheme.id}:${index}`;
                  return <li className={checkedSteps[key] ? "step-complete" : ""} key={step}>
                    <label><input type="checkbox" checked={Boolean(checkedSteps[key])} onChange={() => toggleStep(detailScheme.id, index)} /><span>{language === "hi" ? detailScheme.stepsHi[index] : step}</span></label>
                  </li>;
                })}</ol>
                <a className="official-link" href={detailScheme.officialUrl} target="_blank" rel="noreferrer">{t.officialPortal}<Icon name="arrow" size={14} /></a>
              </section>
              <section className="detail-panel">
                <h2>{t.officialSourcesLabel}</h2>
                <ul>{detailScheme.source_urls.map((source) => <li key={source}><a href={source} target="_blank" rel="noreferrer">{source}</a></li>)}</ul>
                <p className="data-status-note">{detailScheme.data_status} · {t.dataVerified}: {detailScheme.last_verified}</p>
              </section>
              <p className="scheme-data-note"><span className="note-mark">i</span><span>{t.footerDisclaimer}</span></p>
            </div>
            <aside className="scheme-detail-aside">
              <div className="detail-benefit-card"><span>{t.benefitLabel}</span><strong>{language === "hi" ? detailScheme.benefitHi : detailScheme.benefit}</strong></div>
              <button className={selected.includes(detailScheme.id) ? "compare-button selected" : "compare-button"} onClick={() => toggleCompare(detailScheme.id)} aria-pressed={selected.includes(detailScheme.id)}>{selected.includes(detailScheme.id) ? t.selected : t.compare}</button>
              <p>{t.leadershipDisclaimer}</p>
            </aside>
          </div>
        </main>
        <footer className="site-footer">
          <div className="site-footer-inner page-width">
            <div className="footer-main">
              <div className="footer-brand-block">
                <a className="brand footer-brand" href="/" onClick={(event) => { event.preventDefault(); navigateTo("/"); }}><span className="brand-mark"><span /><span /><span /></span><span className="brand-name">scheme<span>sathi</span></span></a>
                <p className="footer-tagline">{t.footerNote}</p>
              </div>
              <nav className="footer-links" aria-label={t.navAbout}>
                <a href="/#schemes">{t.navSchemes}</a>
                <a href="/#how-it-works">{t.navHow}</a>
                <a href="/#about">{t.navAbout}</a>
              </nav>
              <div className="footer-languages">भारत <span>·</span> {language === "hi" ? "आपकी भाषा, आपकी सुविधा" : "Your language, your choice"}</div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} SchemeSathi</span>
              <span>{t.leadershipDisclaimer}</span>
              <p>{t.footerDisclaimer}</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className={`app-shell ${isBrowsePage ? "browse-page" : ""}`}>
      <header className="site-header">
        <a className="brand" href="/" onClick={(event) => { event.preventDefault(); navigateTo("/"); }} aria-label="SchemeSathi home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-name">scheme<span>sathi</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href={isBrowsePage ? "/#how-it-works" : "#how-it-works"}>{t.navHow}</a>
          <a href={isBrowsePage ? "/#schemes" : "#schemes"}>{t.navSchemes}</a>
          <a href={isBrowsePage ? "/#about" : "#about"}>{t.navAbout}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Choose language">
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <span />
            <button className={language === "hi" ? "active" : ""} onClick={() => setLanguage("hi")} aria-pressed={language === "hi"}>हि</button>
          </div>
          <button className="profile-link" onClick={openProfile}>
            <span className="profile-avatar"><Icon name="list" size={16} /></span>
            <span>{profile.submitted ? t.editProfile : t.checkEligibility}</span>
          </button>
        </div>
      </header>

      <main id="home">
        {!isBrowsePage && <>
        <section className="hero-section">
          <div className="hero-grid page-width">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" />{t.eyebrow}</div>
              <h1>{t.heroTitle}</h1>
              <p className="hero-description">{t.heroText}</p>
              <form className="hero-search" onSubmit={(event) => { event.preventDefault(); document.getElementById("schemes")?.scrollIntoView({ behavior: "smooth" }); }}>
                <Icon name="search" size={21} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchLabel} />
                <button type="submit" aria-label={t.searchButton}><span>{t.searchButton}</span><Icon name="arrow" size={18} /></button>
              </form>
              <div className="hero-proof"><span className="proof-check"><Icon name="check" size={13} /></span>{t.footerDisclaimer}</div>
            </div>

            <div className="advisor-visual" aria-label={t.advisorTag}>
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="floating-leaf leaf-one">✳</div>
              <div className="floating-leaf leaf-two">✳</div>
              <div className="advisor-card">
                <div className="advisor-topline"><span className="advisor-icon"><Icon name="spark" size={18} /></span><span>{t.advisorTag}</span><span className="live-dot" /></div>
                <div className="advisor-greeting">{t.profileReady}</div>
                <div className="advisor-subtitle">{profile.submitted ? `${profile.state ? optionLabel("states", profile.state, language) : ""}${profile.roles.length ? ` · ${profile.roles.map((role) => optionLabel("occupations", role, language)).join(", ")}` : ""}` : t.cardBased}</div>
                <div className="match-number">{matches.length}<span> {t.cardMatches}</span></div>
                <div className="mini-scheme-list">
                  {matches.slice(0, 3).map((scheme, index) => (
                    <div className="mini-scheme" key={scheme.id}>
                      <span className={`mini-scheme-icon ${scheme.accent}`}>{index === 0 ? "✳" : index === 1 ? "↗" : "⌂"}</span>
                      <span className="mini-scheme-name">{language === "hi" ? scheme.nameHi : scheme.name}</span>
                      <span className={`mini-match mini-${screeningStatus(scheme, profile, t, language)}`}>{statusLabel(screeningStatus(scheme, profile, t, language), t)}</span>
                    </div>
                  ))}
                </div>
                <button className="advisor-profile-button" onClick={openProfile}>{profile.submitted ? t.editProfile : t.checkEligibility}<Icon name="arrow" size={16} /></button>
              </div>
              <div className="visual-caption"><span className="caption-dot" /> {language === "hi" ? "आपकी जानकारी, आपके काम के सुझाव" : "Your details in. Useful guidance out."}</div>
            </div>
          </div>
          <div className="hero-bottom-rule page-width"><span /><span /><span /></div>
        </section>

        <section className="public-service-section page-width" aria-labelledby="public-service-title">
          <div className="public-service-copy">
            <div className="eyebrow section-eyebrow">{t.publicServiceEyebrow}</div>
            <h2 id="public-service-title">{t.publicServiceTitle}</h2>
            <p>{t.publicServiceText}</p>
            <span className="public-service-disclaimer">{t.leadershipDisclaimer}</span>
          </div>
          <div className="leadership-photos">
            <a className="leader-photo-card" href="https://commons.wikimedia.org/wiki/File:Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png" target="_blank" rel="noreferrer">
              <img src="/images/prime-minister.png" alt="Official portrait of Prime Minister Narendra Modi" width="800" height="945" loading="lazy" />
              <span className="leader-photo-caption"><strong>Narendra Modi</strong><span>{t.primeMinisterRole}</span><small>Photo: Prime Minister's Office · GODL-India</small></span>
            </a>
            <a className="leader-photo-card" href="https://commons.wikimedia.org/wiki/File:Droupadi_Murmu_POI_official_portrait.jpg" target="_blank" rel="noreferrer">
              <img src="/images/president.jpg" alt="Official portrait of President Droupadi Murmu" width="800" height="1200" loading="lazy" />
              <span className="leader-photo-caption"><strong>Droupadi Murmu</strong><span>{t.presidentRole}</span><small>Photo: President's Secretariat · GODL-India</small></span>
            </a>
          </div>
        </section>
        </>}

        <section className="schemes-section page-width" id="schemes">
          <div className="section-heading">
            <div>
              {isBrowsePage && <button className="back-link browse-back-link" onClick={() => navigateTo("/")}><Icon name="arrow" size={15} />{t.backHome}</button>}
              <div className="eyebrow section-eyebrow">{t.exploreEyebrow}</div>
              <h2>{isBrowsePage ? t.allSchemesTitle : profile.submitted ? t.matchResults : t.exploreTitle}</h2>
              <p>{isBrowsePage ? t.allSchemesText : profile.submitted ? t.resultSummary : t.exploreText}</p>
            </div>
            <div className="section-side-note"><span className="side-note-icon"><Icon name="spark" size={17} /></span><span>{t.demo}<br /><small>{schemes.length} {language === "hi" ? "योजना के उदाहरण" : "sample schemes"}</small><small>{t.dataVerified}: {new Intl.DateTimeFormat(language === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${schemeDataset.schemes[0].last_verified}T00:00:00Z`))}</small></span></div>
          </div>

          <div className="scheme-controls">
            <label className="scheme-search"><Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchLabel} aria-label={t.searchLabel} /><span className="search-shortcut">⌕</span></label>
            <div className="category-tabs" role="group" aria-label={t.searchLabel}>
              {categories.map((item) => <button key={item} className={category === item ? "category-tab active" : "category-tab"} onClick={() => setCategory(item)} aria-pressed={category === item}>{categoryText[language][item]}</button>)}
            </div>
          </div>

          {profile.submitted && !isBrowsePage && <div className="eligibility-summary">
            <button className={resultFilter === "recommended" ? "result-filter active potential" : "result-filter"} onClick={() => setResultFilter("recommended")}>{t.recommended}<span>{resultCounts.potential + resultCounts.needs}</span></button>
            <button className={resultFilter === "all" ? "result-filter active" : "result-filter"} onClick={() => setResultFilter("all")}>{t.allResults}<span>{schemes.length}</span></button>
            <button className={resultFilter === "potential" ? "result-filter active potential" : "result-filter"} onClick={() => setResultFilter("potential")}>{t.statusPotential}<span>{resultCounts.potential}</span></button>
            <button className={resultFilter === "needs" ? "result-filter active needs" : "result-filter"} onClick={() => setResultFilter("needs")}>{t.statusNeeds}<span>{resultCounts.needs}</span></button>
            <button className={resultFilter === "no-match" ? "result-filter active no-match" : "result-filter"} onClick={() => setResultFilter("no-match")}>{t.statusNoMatch}<span>{resultCounts["no-match"]}</span></button>
            <button className="edit-answers-button" onClick={openProfile}>{t.editProfile}</button>
          </div>}
          <div className="results-line"><span>{visibleMatches.length} {t.results}</span><span className="results-caption">{profile.submitted ? `${resultCounts.potential} ${t.potentialCount}` : language === "hi" ? "पहले सबसे प्रासंगिक सुझाव" : "Most relevant suggestions first"}</span></div>
          {visibleMatches.length ? (
            <div className="scheme-results-list">
            <div className="scheme-grid">
              {visibleMatches.map((scheme) => {
                const isSelected = selected.includes(scheme.id);
                const evaluation = evaluateScheme(scheme, profile, t, language);
                return (
                  <article className="scheme-card" key={scheme.id}>
                    <div className="scheme-card-top">
                      <span className={`scheme-icon ${scheme.accent}`}>{scheme.category === "farming" ? "✳" : scheme.category === "education" ? "↗" : scheme.category === "housing" ? "⌂" : scheme.category === "business" ? "↗" : "♡"}</span>
                      <div className="scheme-heading"><span className="scheme-category">{categoryText[language][scheme.category]}</span><h3>{language === "hi" ? scheme.nameHi : scheme.name}</h3><div className="scheme-ministry">{language === "hi" ? scheme.ministryHi : scheme.ministry}</div></div>
                      <div className={`screening-status screening-${evaluation.status}`}>{statusLabel(evaluation.status, t)}</div>
                    </div>
                    <figure className={`scheme-illustration illustration-${scheme.category}`}>
                      <a className="scheme-photo-link" href={schemeIllustrations[scheme.category].source} target="_blank" rel="noreferrer" aria-label={`View photo source: ${schemeIllustrations[scheme.category].credit}`}>
                        <img src={schemeIllustrations[scheme.category].src} alt={schemeIllustrations[scheme.category].alt} loading="lazy" decoding="async" width="960" height="540" />
                      </a>
                      <figcaption><a href={schemeIllustrations[scheme.category].source} target="_blank" rel="noreferrer">Photo: {schemeIllustrations[scheme.category].credit}</a></figcaption>
                    </figure>
                    <div className="scheme-benefit"><span className="benefit-check"><Icon name="check" size={13} /></span><span>{language === "hi" ? scheme.benefitHi : scheme.benefit}</span></div>
                    <div className="scheme-card-actions">
                      <button className="steps-button" onClick={() => navigateTo(`/schemes/${encodeURIComponent(scheme.id)}`)}>{t.seeDetails}<Icon name="chevron" size={15} /></button>
                      <button className={isSelected ? "compare-button selected" : "compare-button"} onClick={() => toggleCompare(scheme.id)} aria-pressed={isSelected}>{isSelected ? <><Icon name="check" size={15} />{t.selected}</> : <>{t.compare}<span className="compare-plus">+</span></>}</button>
                    </div>
                  </article>
                );
              })}
            </div>
            {!isBrowsePage && <button className="see-more-button" type="button" onClick={() => navigateTo("/schemes")}>{t.seeMore}<Icon name="chevron" size={16} /></button>}
            </div>
          ) : (
            <div className="empty-state"><span><Icon name="search" size={22} /></span><h3>{t.noResults}</h3><p>{t.noResultsHint}</p></div>
          )}
          <div className="scheme-data-note"><span className="note-mark">i</span><span>{t.footerDisclaimer}</span></div>
        </section>

        {!isBrowsePage && <section className="value-section" id="how-it-works">
          <div className="value-inner page-width">
            <div className="value-intro">
              <div className="eyebrow section-eyebrow">{t.matchedLabel}</div>
              <h2>{t.matchedTitle}</h2>
              <p>{t.matchedText}</p>
              <div className="value-stamp"><span>जन</span><small>{language === "hi" ? "लोगों के लिए, आसान भाषा में" : "Made for people, in plain language"}</small></div>
            </div>
            <div className="value-grid">
              {[
                ["01", t.value1Title, t.value1Text, "spark"],
                ["02", t.value2Title, t.value2Text, "search"],
                ["03", t.value3Title, t.value3Text, "list"],
                ["04", t.value4Title, t.value4Text, "arrow"],
              ].map(([number, title, text, icon]) => <div className="value-card" key={number}>
                <div className="value-card-top"><span className="value-number">{number}</span><span className="value-icon"><Icon name={icon} size={18} /></span></div>
                <h3>{title}</h3><p>{text}</p>
              </div>)}
            </div>
          </div>
        </section>}

        {!isBrowsePage && <section className="final-cta page-width" id="about">
          <div className="cta-decoration"><span /><span /><span /></div>
          <div className="cta-content"><div className="eyebrow cta-eyebrow">{t.advisorTag}</div><h2>{t.finalTitle}</h2><p>{t.finalText}</p></div>
          <button className="cta-button" onClick={openProfile}>{t.startNow}<Icon name="arrow" size={18} /></button>
        </section>}
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner page-width">
          <div className="footer-main">
            <div className="footer-brand-block">
              <a className="brand footer-brand" href="/" onClick={(event) => { event.preventDefault(); navigateTo("/"); }}><span className="brand-mark"><span /><span /><span /></span><span className="brand-name">scheme<span>sathi</span></span></a>
              <p className="footer-tagline">{t.footerNote}</p>
            </div>
            <nav className="footer-links" aria-label={t.navAbout}>
              <a href="/#schemes">{t.navSchemes}</a>
              <a href="/#how-it-works">{t.navHow}</a>
              <a href="/#about">{t.navAbout}</a>
            </nav>
            <div className="footer-languages">भारत <span>·</span> {language === "hi" ? "आपकी भाषा, आपकी सुविधा" : "Your language, your choice"}</div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} SchemeSathi</span>
            <span>{t.leadershipDisclaimer}</span>
            <p>{t.footerDisclaimer}</p>
          </div>
        </div>
      </footer>

      {selected.length > 0 && <div className="compare-dock">
        <div className="compare-dock-info"><span className="dock-count">{selected.length}</span><span><strong>{t.compareTitle}</strong><small>{chosenSchemes.map((scheme) => language === "hi" ? scheme.nameHi : scheme.name).join(" · ")}</small></span></div>
        <button className="dock-clear" onClick={() => setSelected([])}>{t.clearAll}</button>
        <button className="dock-action" onClick={showComparison}>{t.compareAction}<Icon name="arrow" size={16} /></button>
      </div>}

      {notice && <div className="toast-notice" role="status">{notice}</div>}

      {profileOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setProfileOpen(false); }}>
        <section className="dialog profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-title">
          <button className="dialog-close" onClick={() => setProfileOpen(false)} aria-label={t.close}><Icon name="close" size={19} /></button>
          <span className="dialog-icon"><Icon name="spark" size={22} /></span>
          <div className="eyebrow section-eyebrow">{t.profileFields}</div>
          <h2 id="profile-title">{t.profileTitle}</h2>
          <p className="dialog-intro">{t.profileIntro}</p>
          <form onSubmit={saveProfile} className="profile-form">
            <div className="form-group">
              <h3>{t.basicProfile}</h3>
              <label>{t.stateLabel}<select value={draft.state} onChange={(event) => setDraft({ ...draft, state: event.target.value })}><option value="">{t.notSure}</option>{profileOptions.states.map((state) => <option key={state} value={state}>{optionLabel("states", state, language)}</option>)}</select></label>
              <fieldset className="role-options"><legend>{t.profileRoleLabel}</legend><p>{t.selectRole}</p>{profileOptions.occupations.map((role) => <label className="role-option" key={role.value}><input type="checkbox" checked={draft.roles.includes(role.value)} onChange={() => toggleRole(role.value)} /><span>{role[language]}</span></label>)}</fieldset>
              <div className="form-two-columns">
                <label className="answer-field">{t.ageLabel}<input type="number" min="1" max="120" value={draft.age} placeholder={t.agePlaceholder} onChange={(event) => setDraft({ ...draft, age: event.target.value })} /></label>
                <label className="answer-field">{t.incomeExactLabel}<input type="number" min="0" value={draft.annualIncome} placeholder={t.incomeExactPlaceholder} onChange={(event) => setDraft({ ...draft, annualIncome: event.target.value })} /></label>
              </div>
              <label>{t.residenceLabel}<select value={draft.residence} onChange={(event) => setDraft({ ...draft, residence: event.target.value })}><option value="">{t.notSure}</option>{profileOptions.residences.map((residence) => <option key={residence.value} value={residence.value}>{residence[language]}</option>)}</select></label>
            </div>
            {draft.roles.includes("student") && <div className="form-group">
              <h3>{t.answerConditions} · {categoryText[language].education}</h3>
              <AnswerSelect label={t.courseModeLabel} value={draft.courseMode} onChange={(value) => setDraft({ ...draft, courseMode: value })} text={t} options={[{ value: "regular", label: t.yes }, { value: "other", label: t.no }, { value: "unsure", label: t.notSure }]} />
              <AnswerSelect label={t.class12Label} value={draft.class12Percentile} onChange={(value) => setDraft({ ...draft, class12Percentile: value })} text={t} />
              <AnswerSelect label={t.scholarshipLabel} value={draft.otherScholarship} onChange={(value) => setDraft({ ...draft, otherScholarship: value })} text={t} />
            </div>}
            {draft.roles.includes("farmer") && <div className="form-group">
              <h3>{t.answerConditions} · {categoryText[language].farming}</h3>
              <AnswerSelect label={t.landLabel} value={draft.eligibleLand} onChange={(value) => setDraft({ ...draft, eligibleLand: value })} text={t} />
              <AnswerSelect label={t.landRecordLabel} value={draft.landRecord} onChange={(value) => setDraft({ ...draft, landRecord: value })} text={t} />
              <AnswerSelect label={t.incomeTaxLabel} value={draft.incomeTax} onChange={(value) => setDraft({ ...draft, incomeTax: value })} text={t} />
              <AnswerSelect label={t.governmentJobLabel} value={draft.govExclusion} onChange={(value) => setDraft({ ...draft, govExclusion: value })} text={t} />
            </div>}
            {draft.roles.includes("adult_woman") && <div className="form-group">
              <h3>{t.answerConditions} · {categoryText[language].women}</h3>
              <AnswerSelect label={t.lpgLabel} value={draft.existingLpg} onChange={(value) => setDraft({ ...draft, existingLpg: value })} text={t} />
              <AnswerSelect label={t.poorHouseholdLabel} value={draft.eligibleHousehold} onChange={(value) => setDraft({ ...draft, eligibleHousehold: value })} text={t} />
            </div>}
            <div className="form-group">
              <h3>{t.answerConditions} · {categoryText[language].housing}</h3>
              <AnswerSelect label={t.ownsHouseLabel} value={draft.ownsHouse} onChange={(value) => setDraft({ ...draft, ownsHouse: value })} text={t} />
              <AnswerSelect label={t.priorHousingLabel} value={draft.priorHousing} onChange={(value) => setDraft({ ...draft, priorHousing: value })} text={t} />
            </div>
            <p className="profile-privacy-note">{t.profileTip}</p>
            <div className="profile-form-actions"><button type="button" className="cancel-button" onClick={() => setProfileOpen(false)}>{t.cancel}</button><button type="submit" className="save-button">{t.checkEligibility}<Icon name="arrow" size={16} /></button></div>
          </form>
          {profile.state && <div className="saved-profile-note"><Icon name="check" size={14} />{t.profileSaved}</div>}
        </section>
      </div>}

      {compareOpen && <div className="modal-backdrop compare-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCompareOpen(false); }}>
        <section className="dialog comparison-dialog" role="dialog" aria-modal="true" aria-labelledby="compare-title">
          <button className="dialog-close" onClick={() => setCompareOpen(false)} aria-label={t.close}><Icon name="close" size={19} /></button>
          <div className="eyebrow section-eyebrow">{t.advisorTag}</div><h2 id="compare-title">{t.compareTitle}</h2><p className="dialog-intro">{t.compareHint}</p>
          <div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>{t.compareBy}</th>{chosenSchemes.map((scheme) => <th key={scheme.id}>{language === "hi" ? scheme.nameHi : scheme.name}</th>)}</tr></thead><tbody>
            <tr><th>{t.matchLabel}</th>{chosenSchemes.map((scheme) => <td key={scheme.id}><span className={`screening-status screening-${screeningStatus(scheme, profile, t, language)}`}>{statusLabel(screeningStatus(scheme, profile, t, language), t)}</span></td>)}</tr>
            <tr><th>{t.benefitLabel}</th>{chosenSchemes.map((scheme) => <td key={scheme.id}><ul>{(language === "hi" ? scheme.benefitDetailsHi : scheme.benefitDetails).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></td>)}</tr>
            <tr><th>{t.purposeLabel}</th>{chosenSchemes.map((scheme) => <td key={scheme.id}>{language === "hi" ? scheme.purposeHi : scheme.purpose}</td>)}</tr>
            <tr><th>{t.fitLabel}</th>{chosenSchemes.map((scheme) => <td key={scheme.id}>{reasonText(evaluateScheme(scheme, profile, t, language), t, language, scheme)}</td>)}</tr>
            <tr><th>{t.gapsLabel}</th>{chosenSchemes.map((scheme) => {
              const missing = missingProfileFields(scheme, profile, t, language);
              return <td key={scheme.id}>{missing.length ? <ul>{missing.map((field) => <li key={field}>{field}</li>)}</ul> : t.moreToCheck}</td>;
            })}</tr>
            <tr><th>{t.stepsLabel}</th>{chosenSchemes.map((scheme) => <td key={scheme.id}><ol>{scheme.steps.map((step, index) => <li key={step}>{language === "hi" ? scheme.stepsHi[index] : step}</li>)}</ol><a className="official-link" href={scheme.officialUrl} target="_blank" rel="noreferrer">{t.officialPortal}<Icon name="arrow" size={14} /></a></td>)}</tr>
          </tbody></table></div>
          <p className="comparison-disclaimer">{t.footerDisclaimer}</p>
        </section>
      </div>}
    </div>
  );
}

export default App;
