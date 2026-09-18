(() => {
  const moodData = {
    Difficult: { value: 20, title: 'A hard moment', note: 'You do not have to carry this alone.', counselor: { score: 85, status: 'Review now', tone: 'review', signal: 'A lower check-in may benefit from a timely, human-led review.', preview: '“Today feels especially difficult. I could use some support.”', trend: 'M2 18 C30 18,38 48,68 42 S112 20,142 37 S185 61,218 57' } },
    Low: { value: 40, title: 'A gentle day', note: 'Small, caring steps are enough today.', counselor: { score: 72, status: 'Check in', tone: 'review', signal: 'A gentle follow-up may be helpful today.', preview: '“I’m feeling low today and would appreciate a little support.”', trend: 'M2 28 C28 27,37 43,67 39 S111 25,142 37 S185 48,218 42' } },
    Okay: { value: 62, title: 'Steady today', note: 'It’s okay to be exactly where you are.', counselor: { score: 62, status: 'Steady', tone: 'stable', signal: 'Monitoring signal, not a clinical diagnosis.', preview: '“I’m feeling okay today. I’m taking things one moment at a time.”', trend: 'M2 45 C25 40,33 58,55 45 S86 13,107 27 S139 48,157 32 S190 25,218 13' } },
    Good: { value: 78, title: 'A positive moment', note: 'Notice what is helping you feel this way.', counselor: { score: 40, status: 'Improving', tone: 'stable', signal: 'A positive check-in suggests steadier support needs.', preview: '“I’m feeling good today. A few things have been helping.”', trend: 'M2 52 C28 54,39 40,69 42 S111 28,143 32 S187 18,218 15' } },
    Bright: { value: 92, title: 'Feeling bright', note: 'Let this good moment be yours to enjoy.', counselor: { score: 18, status: 'Bright', tone: 'stable', signal: 'A positive check-in suggests lower current support needs.', preview: '“I’m feeling bright today and wanted to share that.”', trend: 'M2 58 C28 55,40 45,68 40 S110 29,142 25 S182 13,218 8' } }
  };

  const translations = {
    English: { space: 'My space', counselor: 'Counselor view', checkin: "TODAY'S CHECK-IN", howFeel: 'How are you feeling?', wellness: 'WELLNESS PULSE', selected: 'Selected', see: 'See what this means', priority: 'PRIORITY QUEUE', people: 'People to review', workspace: 'COUNSELOR WORKSPACE · DEMO DATA', active: 'Active support plans', review: 'Review suggested today', completion: 'Check-in completion', difficult: 'Difficult', low: 'Low', okay: 'Okay', good: 'Good', bright: 'Bright', aiAck: 'Thank you for sharing. Your check-in has been reflected in your support summary.' },
    'हिन्दी': { space: 'मेरा स्थान', counselor: 'काउंसलर दृश्य', checkin: 'आज का चेक-इन', howFeel: 'आप कैसा महसूस कर रहे हैं?', wellness: 'स्वास्थ्य स्थिति', selected: 'चुना गया', see: 'इसका मतलब देखें', priority: 'प्राथमिक सूची', people: 'समीक्षा के लोग', workspace: 'काउंसलर कार्यक्षेत्र · डेमो डेटा', active: 'सक्रिय सहायता योजनाएँ', review: 'आज समीक्षा सुझाई गई', completion: 'चेक-इन पूरा होना', difficult: 'कठिन', low: 'कम', okay: 'ठीक', good: 'अच्छा', bright: 'बहुत अच्छा', aiAck: 'साझा करने के लिए धन्यवाद। आपका चेक-इन सहायता सारांश में दर्ज कर दिया गया है।' },
    'தமிழ்': { space: 'என் இடம்', counselor: 'ஆலோசகர் பார்வை', checkin: 'இன்றைய பதிவு', howFeel: 'நீங்கள் எப்படி உணர்கிறீர்கள்?', wellness: 'நலன் நிலை', selected: 'தேர்ந்தெடுத்தது', see: 'இதன் பொருளைப் பார்க்கவும்', priority: 'முன்னுரிமைப் பட்டியல்', people: 'மதிப்பாய்வு செய்ய வேண்டியவர்கள்', workspace: 'ஆலோசகர் பணியிடம் · டெமோ தரவு', active: 'செயலில் உள்ள உதவித் திட்டங்கள்', review: 'இன்று மதிப்பாய்வு பரிந்துரை', completion: 'பதிவு நிறைவு', difficult: 'கடினம்', low: 'குறைவு', okay: 'சரி', good: 'நன்று', bright: 'மிக நன்று', aiAck: 'பகிர்ந்ததற்கு நன்றி. உங்கள் பதிவு உதவிச் சுருக்கத்தில் சேர்க்கப்பட்டது.' },
    'తెలుగు': { space: 'నా స్థలం', counselor: 'కౌన్సిలర్ వీక్షణ', checkin: 'నేటి చెక్-ఇన్', howFeel: 'మీరు ఎలా ఉన్నారు?', wellness: 'సంక్షేమ స్థితి', selected: 'ఎంచుకున్నది', see: 'దీని అర్థం చూడండి', priority: 'ప్రాధాన్య జాబితా', people: 'సమీక్షించాల్సిన వారు', workspace: 'కౌన్సిలర్ కార్యస్థలం · డెమో డేటా', active: 'క్రియాశీల సహాయ ప్రణాళికలు', review: 'ఈ రోజు సమీక్ష సూచన', completion: 'చెక్-ఇన్ పూర్తి', difficult: 'కష్టం', low: 'తక్కువ', okay: 'సరే', good: 'మంచిది', bright: 'చాలా బాగుంది', aiAck: 'పంచుకున్నందుకు ధన్యవాదాలు. మీ చెక్-ఇన్ సహాయ సారాంశంలో చేర్చబడింది.' },
    'ಕನ್ನಡ': { space: 'ನನ್ನ ಸ್ಥಳ', counselor: 'ಸಲಹೆಗಾರರ ನೋಟ', checkin: 'ಇಂದಿನ ಚೆಕ್-ಇನ್', howFeel: 'ನೀವು ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ?', wellness: 'ಕ್ಷೇಮ ಸ್ಥಿತಿ', selected: 'ಆಯ್ಕೆಮಾಡಿದ್ದು', see: 'ಇದರ ಅರ್ಥ ನೋಡಿ', priority: 'ಆದ್ಯತಾ ಪಟ್ಟಿ', people: 'ಪರಿಶೀಲಿಸಬೇಕಾದವರು', workspace: 'ಸಲಹೆಗಾರರ ಕಾರ್ಯಸ್ಥಳ · ಡೆಮೋ ಡೇಟಾ', active: 'ಸಕ್ರಿಯ ಬೆಂಬಲ ಯೋಜನೆಗಳು', review: 'ಇಂದು ಪರಿಶೀಲನೆ ಸೂಚಿಸಲಾಗಿದೆ', completion: 'ಚೆಕ್-ಇನ್ ಪೂರ್ಣತೆ', difficult: 'ಕಷ್ಟ', low: 'ಕಡಿಮೆ', okay: 'ಸರಿ', good: 'ಒಳ್ಳೆಯದು', bright: 'ಬಹಳ ಚೆನ್ನಾಗಿದೆ', aiAck: 'ಹಂಚಿಕೊಂಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಚೆಕ್-ಇನ್ ಬೆಂಬಲ ಸಾರಾಂಶದಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.' },
    'മലയാളം': { space: 'എന്റെ സ്ഥലം', counselor: 'കൗൺസിലർ കാഴ്ച', checkin: 'ഇന്നത്തെ ചെക്ക്-ഇൻ', howFeel: 'നിങ്ങൾക്ക് എങ്ങനെ തോന്നുന്നു?', wellness: 'ക്ഷേമ നില', selected: 'തിരഞ്ഞെടുത്തത്', see: 'ഇതിന്റെ അർത്ഥം കാണുക', priority: 'മുൻഗണനാ പട്ടിക', people: 'പരിശോധിക്കേണ്ടവർ', workspace: 'കൗൺസിലർ പ്രവർത്തനസ്ഥലം · ഡെമോ ഡാറ്റ', active: 'സജീവ പിന്തുണാ പദ്ധതികൾ', review: 'ഇന്ന് അവലോകനം നിർദ്ദേശിച്ചു', completion: 'ചെക്ക്-ഇൻ പൂർത്തീകരണം', difficult: 'പ്രയാസം', low: 'കുറവ്', okay: 'ശരി', good: 'നല്ലത്', bright: 'മികച്ചത്', aiAck: 'പങ്കുവെച്ചതിന് നന്ദി. നിങ്ങളുടെ ചെക്ക്-ഇൻ പിന്തുണാ സംഗ്രഹത്തിൽ ചേർത്തു.' },
    'বাংলা': { space: 'আমার স্থান', counselor: 'কাউন্সেলর ভিউ', checkin: 'আজকের চেক-ইন', howFeel: 'আপনি কেমন অনুভব করছেন?', wellness: 'সুস্থতার অবস্থা', selected: 'নির্বাচিত', see: 'এর অর্থ দেখুন', priority: 'অগ্রাধিকার তালিকা', people: 'পর্যালোচনার জন্য মানুষ', workspace: 'কাউন্সেলর কর্মক্ষেত্র · ডেমো ডেটা', active: 'সক্রিয় সহায়তা পরিকল্পনা', review: 'আজ পর্যালোচনা প্রস্তাবিত', completion: 'চেক-ইন সম্পন্নতা', difficult: 'কঠিন', low: 'কম', okay: 'ঠিক আছে', good: 'ভালো', bright: 'দারুণ', aiAck: 'শেয়ার করার জন্য ধন্যবাদ। আপনার চেক-ইন সহায়তা সারাংশে যোগ করা হয়েছে।' },
    'मराठी': { space: 'माझी जागा', counselor: 'समुपदेशक दृश्य', checkin: 'आजची नोंद', howFeel: 'तुम्हाला कसे वाटत आहे?', wellness: 'कल्याण स्थिती', selected: 'निवडलेले', see: 'याचा अर्थ पहा', priority: 'प्राधान्य यादी', people: 'पुनरावलोकनासाठी लोक', workspace: 'समुपदेशक कार्यक्षेत्र · डेमो डेटा', active: 'सक्रिय सहाय्य योजना', review: 'आज पुनरावलोकन सुचवले', completion: 'चेक-इन पूर्णता', difficult: 'कठीण', low: 'कमी', okay: 'ठीक', good: 'चांगले', bright: 'उत्कृष्ट', aiAck: 'सामायिक केल्याबद्दल धन्यवाद. तुमची नोंद सहाय्य सारांशात जोडली आहे.' },
    'ગુજરાતી': { space: 'મારી જગ્યા', counselor: 'કાઉન્સેલર દૃશ્ય', checkin: 'આજનું ચેક-ઇન', howFeel: 'તમે કેવું અનુભવો છો?', wellness: 'સ્વાસ્થ્ય સ્થિતિ', selected: 'પસંદ કરેલ', see: 'આનો અર્થ જુઓ', priority: 'પ્રાથમિકતા યાદી', people: 'સમીક્ષા માટે લોકો', workspace: 'કાઉન્સેલર કાર્યસ્થળ · ડેમો ડેટા', active: 'સક્રિય સહાય યોજનાઓ', review: 'આજે સમીક્ષા સૂચવાઈ', completion: 'ચેક-ઇન પૂર્ણતા', difficult: 'મુશ્કેલ', low: 'ઓછું', okay: 'ઠીક', good: 'સારું', bright: 'ખૂબ સારું', aiAck: 'શેર કરવા બદલ આભાર. તમારું ચેક-ઇન સહાય સારાંશમાં ઉમેરાયું છે.' },
    'ਪੰਜਾਬੀ': { space: 'ਮੇਰੀ ਥਾਂ', counselor: 'ਕੌਂਸਲਰ ਦ੍ਰਿਸ਼', checkin: 'ਅੱਜ ਦਾ ਚੈਕ-ਇਨ', howFeel: 'ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ?', wellness: 'ਤੰਦਰੁਸਤੀ ਸਥਿਤੀ', selected: 'ਚੁਣਿਆ ਗਿਆ', see: 'ਇਸਦਾ ਮਤਲਬ ਵੇਖੋ', priority: 'ਤਰਜੀਹ ਸੂਚੀ', people: 'ਸਮੀਖਿਆ ਲਈ ਲੋਕ', workspace: 'ਕੌਂਸਲਰ ਕਾਰਜਸਥਾਨ · ਡੈਮੋ ਡੇਟਾ', active: 'ਸਰਗਰਮ ਸਹਾਇਤਾ ਯੋਜਨਾਵਾਂ', review: 'ਅੱਜ ਸਮੀਖਿਆ ਸੁਝਾਈ ਗਈ', completion: 'ਚੈਕ-ਇਨ ਪੂਰਨਤਾ', difficult: 'ਮੁਸ਼ਕਲ', low: 'ਘੱਟ', okay: 'ਠੀਕ', good: 'ਚੰਗਾ', bright: 'ਬਹੁਤ ਵਧੀਆ', aiAck: 'ਸਾਂਝਾ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਤੁਹਾਡਾ ਚੈਕ-ਇਨ ਸਹਾਇਤਾ ਸਾਰਾਂਸ਼ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਹੈ।' }
  };

  const people = [
    { id: 'akshavi', initials: 'AK', name: 'Akshavi', queueMeta: 'Investigation · Checked in today', detailMeta: 'Investigation stage · Weekly check-in', ...moodData.Okay.counselor },
    { id: 'yaswant', initials: 'YM', name: 'Yaswant', queueMeta: 'Trial · Missed two check-ins', detailMeta: 'Trial stage · Follow-up due', score: 74, status: 'Review', tone: 'review', signal: 'A follow-up may be helpful after missed check-ins.', preview: '“I have missed a couple of check-ins this week.”', trend: 'M2 20 C28 25,42 54,66 48 S108 24,143 39 S184 47,218 33' },
    { id: 'bala', initials: 'BS', name: 'Bala', queueMeta: 'Compensation · Checked in yesterday', detailMeta: 'Compensation stage · Weekly check-in', score: 55, status: 'Watch', tone: 'watch', signal: 'Continue to observe recent check-in patterns.', preview: '“Yesterday felt manageable, but I’m still adjusting.”', trend: 'M2 42 C29 31,39 57,68 45 S111 36,143 43 S184 31,218 29' },
    { id: 'armaan', initials: 'AP', name: 'Armaan', queueMeta: 'Investigation · Checked in 3 days ago', detailMeta: 'Investigation stage · Follow-up due', score: 70, status: 'Review', tone: 'review', signal: 'A gentle follow-up is suggested after time away.', preview: '“It has been a few days since my last check-in.”', trend: 'M2 28 C30 34,40 57,68 49 S109 28,144 45 S184 52,218 37' }
  ];

  const pageCopy = {
    English: {
      date: 'TUESDAY, 25 AUGUST', welcomeTitle: 'A quiet space for <em>you.</em>', welcome: 'Welcome back, Akshavi. We can take this one moment at a time.', choices: '⌁ Your choices & privacy',
      pulseDefaultTitle: 'Steady today', pulseDefaultCopy: 'Your check-ins suggest a stable week.', demoIndicator: 'DEMO INDICATOR · NOT A DIAGNOSIS',
      talkRio: 'Talk to Rio', hereWithYou: 'Here with you', chatHello: 'Hello Akshavi. I’m Rio, your MindCare guide. How has today felt for you?', anxious: "I'm feeling anxious", pause: 'I need a small pause', case: 'Talk about my case', chatPlaceholder: 'Share what’s on your mind…', chatFootnote: 'Demo AI guidance · For emergencies, use the support options below.',
      needSupport: 'NEED SUPPORT NOW?', noWait: 'You don’t have to wait.', reachSupport: 'Reach a trained person or choose a grounding exercise.', call: 'Call SAKTHIVEL ', reset: 'Try a 60-sec reset ', helpline: 'Helpline action is simulated in this demo.',
      gentleTools: 'GENTLE TOOLS', thisMoment: 'For this moment', boxBreathing: 'Box breathing', twoMinutes: '2 minutes', groundingGuide: 'Grounding guide', senses: '5 senses exercise',
      journey: 'YOUR JOURNEY', smallSteps: 'Small steps count.', checkins: 'check-ins<br />this week', timeForYou: 'time for<br />yourself', progress: 'View gentle progress →',
      morning: 'Good morning, <em>Dr. Meera.</em>', counselorIntro: 'A focused view of people who may benefit from a check-in.', refresh: '↻ Refresh overview', filter: 'Filter ⌄', dds: 'DISTRESS & SUPPORT (DDS)', preview: 'CONVERSATION PREVIEW'
    }
  };

  const counselorCopy = {
    English: { meta: 'Investigation stage · Weekly check-in', steady: 'Steady', signal: 'Monitoring signal, not a clinical diagnosis.', dds: 'DISTRESS & SUPPORT (DDS)', preview: 'CONVERSATION PREVIEW', quote: '“I’m feeling okay today. I’m taking things one moment at a time.”', time: 'Today · Just now', open: 'Open conversation', send: 'Send gentle check-in', note: 'AI flags suggest review. Outreach and any emergency steps remain human-led and governed by consent and local protocol.' }
  };

  const counselorHeaderCopy = {
    English: { greeting: 'Good morning, <em>Dr. Meera.</em>', intro: 'A focused view of people who may benefit from a check-in.', refresh: '↻ Refresh overview', filter: 'Filter ⌄' }
  };

  const byId = (id) => document.getElementById(id);
  const akshavi = () => people[0];
  let selectedPersonId = 'akshavi';
  let selectedMoodName = 'Okay';
  const modal = byId('modal');
  let timerId;

  const t = (key) => (translations[byId('language').value] || translations.English)[key] || translations.English[key] || key;
  const copy = (key) => (pageCopy[byId('language').value] || pageCopy.English)[key] || pageCopy.English[key] || key;
  const counselorText = (key) => (counselorCopy[byId('language').value] || counselorCopy.English)[key] || counselorCopy.English[key] || key;
  const counselorHeaderText = (key) => (counselorHeaderCopy[byId('language').value] || counselorHeaderCopy.English)[key] || counselorHeaderCopy.English[key] || key;
  const titleCaseMoodKey = (name) => name.toLowerCase();

  const applyLanguage = () => {
    const language = byId('language').value;
    document.documentElement.lang = { English: 'en' }[language] || 'en';
    document.querySelector('[data-view="care"]').textContent = t('space');
    document.querySelector('[data-view="counselor"]').textContent = t('counselor');
    document.querySelector('.mood-card .eyebrow').textContent = t('checkin');
    document.querySelector('.mood-card h2').textContent = t('howFeel');
    document.querySelector('.wellness-copy .eyebrow').textContent = t('wellness');
    document.querySelector('.wellness-card .text-button').innerHTML = `${t('see')} <span>→</span>`;
    document.querySelector('.dashboard-head .eyebrow').textContent = t('workspace');
    document.querySelector('.case-list .eyebrow').textContent = t('priority');
    document.querySelector('.case-list h2').textContent = t('people');
    document.querySelectorAll('.dashboard-stats p')[0].textContent = t('active');
    document.querySelectorAll('.dashboard-stats p')[1].textContent = t('review');
    document.querySelectorAll('.dashboard-stats p')[2].textContent = t('completion');
    document.querySelectorAll('.moods button').forEach((button) => {
      button.querySelector('small').textContent = t(titleCaseMoodKey(button.dataset.mood));
    });
    byId('selectedMood').textContent = `${t('selected')}: ${t(titleCaseMoodKey(selectedMoodName))}`;
    
    document.querySelector('.welcome-row .eyebrow').textContent = copy('date');
    document.querySelector('.welcome-row h1').innerHTML = copy('welcomeTitle');
    document.querySelector('.welcome-row .subtle').textContent = copy('welcome');
    byId('consentBtn').textContent = copy('choices');
    byId('pulseTitle').textContent = selectedMoodName === 'Okay' ? copy('pulseDefaultTitle') : byId('pulseTitle').textContent;
    byId('pulseCopy').textContent = selectedMoodName === 'Okay' ? copy('pulseDefaultCopy') : byId('pulseCopy').textContent;
    document.querySelector('.demo-label').textContent = copy('demoIndicator');
    document.querySelector('.chat-card h2').textContent = copy('talkRio');
    document.querySelector('.assistant-id p').childNodes[1].textContent = copy('hereWithYou');
    document.querySelector('#messages .message.bot').textContent = copy('chatHello');
    const suggestions = document.querySelectorAll('.suggestions button');
    [copy('anxious'), copy('pause'), copy('case')].forEach((text, index) => { if (suggestions[index]) suggestions[index].textContent = text; });
    byId('chatText').placeholder = copy('chatPlaceholder');
    document.querySelector('.chat-footnote').textContent = copy('chatFootnote');
    document.querySelector('.support-card .eyebrow').textContent = copy('needSupport');
    document.querySelector('.support-card h2').textContent = copy('noWait');
    document.querySelector('.support-card > p').textContent = copy('reachSupport');
    document.querySelector('#helplineBtn').innerHTML = `${copy('call')}<strong>0000-000-0000</strong>`;
    byId('groundBtn').innerHTML = `${copy('reset')}<span>→</span>`;
    document.querySelector('.support-card small').textContent = copy('helpline');
    document.querySelector('.resource-card .eyebrow').textContent = copy('gentleTools');
    document.querySelector('.resource-card h2').textContent = copy('thisMoment');
    const resources = document.querySelectorAll('.resource');
    resources[0].querySelector('strong').textContent = copy('boxBreathing'); resources[0].querySelector('small').textContent = copy('twoMinutes');
    resources[1].querySelector('strong').textContent = copy('groundingGuide'); resources[1].querySelector('small').textContent = copy('senses');
    document.querySelector('.journey .eyebrow').textContent = copy('journey');
    document.querySelector('.journey h2').textContent = copy('smallSteps');
    const journeyStats = document.querySelectorAll('.journey-stat span');
    journeyStats[0].innerHTML = copy('checkins'); journeyStats[1].innerHTML = copy('timeForYou');
    byId('journeyBtn').textContent = copy('progress');
    
    document.querySelector('.dashboard-head h1').innerHTML = counselorHeaderText('greeting');
    document.querySelector('.dashboard-head .subtle').textContent = counselorHeaderText('intro');
    byId('refreshBtn').textContent = counselorHeaderText('refresh');
    document.querySelector('.filter').textContent = counselorHeaderText('filter');
    document.querySelector('.risk-panel .eyebrow').textContent = counselorText('dds');
    document.querySelector('.preview .eyebrow').textContent = counselorText('preview');
    byId('openChatBtn').textContent = counselorText('open');
    byId('checkinBtn').textContent = counselorText('send');
    document.querySelector('.governance-note').textContent = counselorText('note');
    renderCounselorDetail(people.find((person) => person.id === selectedPersonId) || akshavi());
  };

  const stopTimer = (hideModal = true) => {
    if (timerId) window.clearInterval(timerId);
    timerId = undefined;
    if (hideModal) modal.hidden = true;
  };

  const showModal = (title, text, kicker = 'MINDFUL MOMENT', actionLabel = 'I understand') => {
    stopTimer(false);
    byId('modalTitle').textContent = title;
    byId('modalText').textContent = text;
    byId('modalKicker').textContent = kicker;
    byId('timerDisplay').hidden = true;
    byId('modalAction').textContent = actionLabel;
    byId('modalAction').setAttribute('data-close-modal', '');
    byId('modalAction').onclick = null;
    modal.hidden = false;
  };

  const startTimer = ({ title, text, kicker, seconds }) => {
    showModal(title, text, kicker, 'Stop timer');
    const display = byId('timerDisplay');
    const action = byId('modalAction');
    let remaining = seconds;
    const renderTime = () => {
      display.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
    };

    display.hidden = false;
    renderTime();
    action.removeAttribute('data-close-modal');
    action.onclick = () => stopTimer();
    timerId = window.setInterval(() => {
      remaining -= 1;
      renderTime();
      if (remaining <= 0) {
        stopTimer(false);
        byId('modalTitle').textContent = 'Nice work.';
        byId('modalText').textContent = 'You completed this gentle moment.';
        action.textContent = 'Close';
        action.setAttribute('data-close-modal', '');
      }
    }, 1000);
  };

  const renderCounselorDetail = (person) => {
    byId('detailAvatar').textContent = person.initials;
    byId('detailName').textContent = person.name;
    const isDefaultAkshavi = person.id === 'akshavi' && selectedMoodName === 'Okay';
    byId('detailMeta').textContent = isDefaultAkshavi ? counselorText('meta') : person.detailMeta;
    byId('detailStatus').textContent = isDefaultAkshavi ? counselorText('steady') : person.status;
    byId('detailStatus').className = `status ${person.tone}`;
    byId('ddsValue').innerHTML = `${person.score} <small>/ 100</small>`;
    byId('ddsText').textContent = isDefaultAkshavi ? counselorText('signal') : person.signal;
    byId('previewText').textContent = isDefaultAkshavi ? counselorText('quote') : person.preview;
    document.querySelector('.preview span').textContent = person.id === 'akshavi' ? counselorText('time') : 'Today · 10:42 AM';
    document.querySelector('.risk-panel path')?.setAttribute('d', person.trend);
  };

  const renderCaseList = () => {
    const list = byId('caseList');
    list.replaceChildren();
    people.forEach((person) => {
      const row = document.createElement('div');
      row.className = `case-row${person.id === selectedPersonId ? ' active' : ''}`;
      row.tabIndex = 0;
      row.setAttribute('role', 'button');
      row.setAttribute('aria-label', `View ${person.name}`);
      row.innerHTML = `<div class="case-avatar">${person.initials}</div><div class="case-info"><strong>${person.name}</strong><small>${person.queueMeta}</small></div><span class="status ${person.tone}">${person.status}</span>`;
      const selectPerson = () => {
        selectedPersonId = person.id;
        renderCaseList();
        renderCounselorDetail(person);
      };
      row.addEventListener('click', selectPerson);
      row.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') selectPerson();
      });
      list.append(row);
    });
  };

  const updateCounselorFromMood = (mood, message) => {
    const update = mood.counselor;
    Object.assign(akshavi(), update, {
      score: mood.value,
      detailMeta: `Investigation stage · ${mood.title} check-in`,
      queueMeta: 'Investigation · Checked in today',
      preview: message ? `“${message}”` : update.preview
    });
    selectedPersonId = 'akshavi';
    renderCaseList();
    renderCounselorDetail(akshavi());
  };

  const setMood = (name) => {
    const mood = moodData[name];
    selectedMoodName = name;
    document.querySelectorAll('.moods button').forEach((item) => item.classList.toggle('selected', item.dataset.mood === name));
    byId('selectedMood').textContent = `${t('selected')}: ${t(titleCaseMoodKey(name))}`;
    byId('checkinValue').textContent = `${mood.value}%`;
    byId('checkinFill').style.width = `${mood.value}%`;
    byId('moodNote').textContent = mood.note;
    byId('pulseTitle').textContent = mood.title;
    byId('pulseCopy').textContent = `Your check-in is ${name.toLowerCase()} today.`;
    byId('pulseNumber').textContent = mood.value;
    byId('pulseRing').style.setProperty('--progress', `${mood.value}%`);
    byId('pulseRing').setAttribute('aria-label', `Wellness indicator ${mood.value} out of 100`);
    updateCounselorFromMood(mood);
    return mood;
  };

  const moodFromMessage = (message) => {
    const text = message.toLowerCase();
    if (/(anxious|panic|unsafe|overwhelmed|hopeless|difficult|scared|sad)/.test(text)) return 'Difficult';
    if (/(low|tired|pause|stressed|drained|down)/.test(text)) return 'Low';
    if (/(bright|excited|joyful|amazing|great)/.test(text)) return 'Bright';
    if (/(good|better|calm|grateful|happy)/.test(text)) return 'Good';
    return 'Okay';
  };

  const addMessage = (kind, text) => {
    const bubble = document.createElement('div');
    bubble.className = `message ${kind}`;
    bubble.textContent = text;
    byId('messages').append(bubble);
    bubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  document.querySelectorAll('.moods button').forEach((button) => button.addEventListener('click', () => setMood(button.dataset.mood)));

  // === NEW AI FUNCTION ADDED HERE ===
  async function fetchGeminiResponse(userText) {
    const apiKey = 'AQ.Ab8RN6J0oEOYCHnFGkC6CELnTt2FrKQbJeuvGX5GJmgIQ8yMZQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userText }] }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        }
        return "I'm sorry, I couldn't process that right now.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm having trouble connecting to the AI.";
    }
  }

  // === UPDATED CHAT FORM LISTENER ===
  byId('chatForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = byId('chatText');
    const message = input.value.trim();
    if (!message) return;
    
    // Show user message
    addMessage('user', message);
    input.value = '';
    
    // Keep mood logic working
    const moodName = moodFromMessage(message);
    updateCounselorFromMood(moodData[moodName], message);
    
    // Fetch and show real AI response
    const aiResponse = await fetchGeminiResponse(message);
    addMessage('bot', aiResponse);
  });

  document.querySelectorAll('.suggestions button').forEach((button) => button.addEventListener('click', () => {
    byId('chatText').value = button.textContent;
    byId('chatText').focus();
  }));

  document.querySelectorAll('.resource')[0]?.addEventListener('click', () => startTimer({
    kicker: 'BOX BREATHING', title: 'Breathe with a steady rhythm', text: 'Breathe in for 4, hold for 4, breathe out for 4, then hold for 4. Repeat gently.', seconds: 120
  }));

  document.querySelectorAll('.resource')[1]?.addEventListener('click', () => startTimer({
    kicker: 'GROUNDING GUIDE', title: 'Use your five senses', text: 'Look around and slowly name the things you can see, feel, hear, smell, and taste.', seconds: 60
  }));

  byId('groundBtn')?.addEventListener('click', () => startTimer({
    kicker: 'GROUNDING GUIDE', title: 'Use your five senses', text: 'Look around and slowly name the things you can see, feel, hear, smell, and taste.', seconds: 60
  }));

  byId('helplineBtn')?.addEventListener('click', () => showModal('Support is available', 'This demo would connect you with a trained support person.', 'SUPPORT OPTIONS'));
  byId('pulseBtn')?.addEventListener('click', () => showModal('Your wellness pulse', 'This indicator reflects your check-ins and is not a diagnosis.', 'WELLNESS PULSE'));
  byId('journeyBtn')?.addEventListener('click', () => showModal('Your gentle progress', 'Three check-ins and twelve minutes for yourself are meaningful steps.', 'YOUR JOURNEY'));
  byId('consentBtn')?.addEventListener('click', () => showModal('You stay in control', 'This prototype lets you choose what you share. A production service would offer separate choices for conversations, transcripts, counselor access, and emergency pathways.', 'YOUR CHOICES', 'Review later'));
  document.querySelector('.profile')?.addEventListener('click', () => showModal('Akshavi', 'Profile settings are simulated in this hackathon prototype.', 'YOUR PROFILE', 'Close'));
  document.querySelector('.chat-card .more')?.addEventListener('click', () => showModal('About Rio', 'Rio is a demo guide for gentle, supportive conversation.', 'CHAT INFORMATION', 'Close'));
  document.querySelector('.resource-card .more')?.addEventListener('click', () => showModal('More support tools', 'This demo keeps options simple. A production version can include saved resources and accessibility preferences.', 'MORE OPTIONS', 'Close'));

  byId('openChatBtn')?.addEventListener('click', () => {
    byId('careView').hidden = false;
    byId('counselorView').hidden = true;
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.toggle('active', item.dataset.view === 'care'));
    byId('chatText').focus();
  });

  byId('checkinBtn')?.addEventListener('click', () => showModal('Gentle check-in sent', 'Akshavi will receive a kind invitation to share how things are going.', 'COUNSELOR ACTION', 'Close'));

  byId('refreshBtn')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    button.textContent = '✓ Overview refreshed';
    window.setTimeout(() => { button.textContent = '↻ Refresh overview'; }, 1500);
  });

  document.querySelector('.filter')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const showingReview = button.dataset.reviewOnly === 'true';
    button.dataset.reviewOnly = String(!showingReview);
    button.textContent = showingReview ? 'Filter ⌄' : 'Showing review only';
    byId('caseList').querySelectorAll('.case-row').forEach((row) => {
      row.hidden = !showingReview && !row.querySelector('.status.review');
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-modal]') || event.target === modal) stopTimer(false);
  });

  document.querySelectorAll('.nav-link').forEach((button) => button.addEventListener('click', () => {
    const counselor = button.dataset.view === 'counselor';
    byId('careView').hidden = counselor;
    byId('counselorView').hidden = !counselor;
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.toggle('active', item === button));
  }));

  byId('language').addEventListener('change', applyLanguage);

  renderCaseList();
  renderCounselorDetail(akshavi());
  applyLanguage();
})();
