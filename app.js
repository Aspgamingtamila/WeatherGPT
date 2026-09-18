<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>WeatherGPT — Weather to Action Intelligence</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <link rel="stylesheet" href="style.css">
  <style>
    .map-layer-picker{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}.layer-chip{border:1px solid #dcebf1;border-radius:7px;background:#fff;color:#17364d;padding:6px 8px;font:11px 'DM Sans';cursor:pointer}.layer-chip.active{color:#075c93;border-color:#7bc9ed;background:#e5f6ff}#map{height:300px;margin-top:12px;overflow:hidden}.leaflet-control-attribution{font-size:8px!important}.timeline{margin-top:10px;border:1px solid #e4eef2;border-radius:10px;padding:9px;background:#fbfdfe}.timeline-head{display:flex;justify-content:space-between;align-items:center;color:#698091;font-size:10px;font-weight:600}.timeline-head button{border:0;border-radius:6px;background:#e8f7ee;color:#087349;padding:4px 6px;font:700 9px 'DM Sans';cursor:pointer}.time-fields{display:grid;grid-template-columns:1.1fr 1.25fr .9fr .9fr .9fr auto;gap:5px;align-items:end;margin-top:7px}.time-fields label{display:flex;flex-direction:column;gap:3px;color:#6b8494;font:700 8px 'DM Sans';letter-spacing:.4px}.time-fields input,.time-fields select{min-width:0;width:100%;border:1px solid #dcebf1;border-radius:5px;background:#fff;color:#17364d;padding:5px;font:600 10px 'DM Sans'}.time-fields button{border:0;border-radius:6px;background:#1689d4;color:#fff;padding:7px 8px;font:700 10px 'DM Sans';white-space:nowrap;cursor:pointer}.radar-scrub{display:grid;grid-template-columns:24px 1fr 24px 30px;gap:5px;align-items:center;margin-top:8px}.radar-scrub button{height:24px;border:1px solid #dcebf1;border-radius:5px;background:#fff;color:#1689d4;cursor:pointer}.radar-scrub input{accent-color:#1689d4;width:100%}.map-caption{padding-top:9px}.map-legend{display:flex;flex-wrap:wrap;gap:10px;padding:7px 2px 0;color:#698091;font-size:9px}.map-legend span{display:flex;align-items:center;gap:4px}.map-legend i{width:11px;height:6px;border-radius:5px;display:inline-block}.legend-rain{background:linear-gradient(90deg,#51b5ff,#6747f5,#e357c8)}.legend-heat{background:linear-gradient(90deg,#ffdd45,#f26c2d,#be2c2c)}.legend-flood{background:linear-gradient(90deg,#7ed9f7,#1f7ed4,#3c3ba6)}.hazard-label{border:0!important;border-radius:12px!important;padding:3px 6px!important;box-shadow:0 2px 8px #17364d33!important;font:700 9px 'DM Sans'!important}.map-tools button,.primary,.quick button,.outline,.icon-btn,.assistant-launch,.suggestions button{cursor:pointer}@media(max-width:900px){.time-fields{grid-template-columns:repeat(3,1fr)}.time-fields button{grid-column:span 3}}@media(max-width:600px){.time-fields{grid-template-columns:repeat(2,1fr)}.time-fields button{grid-column:span 2}#map{height:280px}}
    .dashboard>.map-card{grid-column:1/-1!important;width:100%;min-width:0}.map-card>.timeline,.system-flow{display:none!important}.location-manager{margin-top:14px;border-top:1px solid #41667a;padding-top:10px;color:#d9f2ff}.location-manager summary{cursor:pointer;font:700 11px 'DM Sans';letter-spacing:.2px}.location-manager>div{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:7px;margin-top:9px}.location-manager input{min-width:0;border:1px solid #6f91a4;border-radius:7px;padding:8px;background:#fff;color:#17364d;font:12px 'DM Sans'}.location-manager button{border:0;border-radius:7px;background:#b9ef19;color:#183949;padding:8px 10px;font:700 12px 'DM Sans';cursor:pointer}.location-manager small{display:block;margin-top:7px;color:#b7d8e8;font-size:10px}.windy-note{font-size:10px;color:#698091;align-self:center}.map-workspace{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:14px;margin-top:14px}#map{position:relative;height:560px;width:100%;min-width:0;overflow:hidden;border-radius:12px}#windy{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-width:0!important}#windy #bottom,#windy .bottom-wrapper,#windy .progress-bar,#windy .timeline{display:none!important}.assistant-panel.map-docked{position:static;display:flex;flex-direction:column;width:auto;height:560px;box-shadow:none;border-radius:12px;z-index:auto}.assistant-panel.map-docked .chat{height:auto;flex:1}.assistant-panel.map-docked + *{display:none}.assistant-launch{display:none!important}.windy-fallback{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:13px;padding:28px;text-align:center;text-decoration:none;color:#fff;background:radial-gradient(circle at 30% 30%,#4fba8d,#155c7d 47%,#123b61);cursor:pointer}.windy-fallback-logo{font:700 32px Outfit}.windy-fallback-logo::first-letter{color:#e4343d}.windy-fallback strong{font:700 25px Outfit}.windy-fallback small{font-size:14px;color:#d7eff9}.windy-fallback b{margin-top:8px;padding:13px 18px;border-radius:10px;background:#d12f35;font:700 14px 'DM Sans';box-shadow:0 5px 16px #051d3e55}.windy-full-link{color:#1689d4;font-weight:700;text-decoration:none;font-size:10px}.windy-launch{margin-left:auto;background:#d12f35;color:#fff!important;border-radius:8px;padding:7px 10px;font:700 11px 'DM Sans';text-decoration:none;box-shadow:0 2px 7px #a51f2533}.map-caption{align-items:center;gap:8px}.legacy-controls{display:none!important}@media(min-width:901px){.dashboard{grid-template-columns:1fr 1fr 1fr}.map-card{grid-row:1}.weather-card{grid-column:1;grid-row:2}.alerts{grid-column:2;grid-row:2}}@media(max-width:900px){.map-workspace{grid-template-columns:1fr}.assistant-panel.map-docked{height:420px}}@media(max-width:700px){.location-manager>div{grid-template-columns:1fr 1fr}.location-manager button{grid-column:span 2}}@media(max-width:600px){.windy-launch{width:100%;text-align:center;margin-left:0}}
  </style>
</head>
<body>
  <div class="aurora a1"></div><div class="aurora a2"></div>
  <header class="topbar">
    <a class="brand" href="#"><img src="weathergpt-logo.jpg" alt="WeatherGPT logo"><span>Weather<span>GPT</span><small>WEATHER TO ACTION</small></span></a>
    <div class="header-tools"><span class="live"><i></i><span data-i18n="live">LIVE DATA</span></span><select id="language" aria-label="Language"><option value="en">English</option><option value="hi">हिन्दी</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="bn">বাংলা</option><option value="mr">मराठी</option></select><button class="icon-btn" id="locate" title="Use my location">⌖</button></div>
  </header>
  <main>
    <section class="hero">
      <div><p class="eyebrow">INDIA'S CONVERSATIONAL WEATHER INTELLIGENCE</p><h1 data-i18n="title">Know the weather.<br><em>Know what to do.</em></h1><p class="hero-copy" data-i18n="subtitle">Real-time forecasts become clear, local actions for safer communities, farms and journeys.</p></div>
      <div class="status-card"><div><span data-i18n="system">SYSTEM STATUS</span><strong>All weather systems operational</strong></div><b>✓</b></div>
    </section>
    <section class="search-panel">
      <div class="selects"><label><span>Country</span><select id="country"><option value="India">🇮🇳 India</option><option value="United States">🇺🇸 United States</option><option value="United Kingdom">🇬🇧 United Kingdom</option><option value="Australia">🇦🇺 Australia</option></select></label><label><span>State / Region</span><select id="state"></select></label><label><span>District / City</span><select id="district"></select></label><button class="primary" id="update">Explore weather <span>→</span></button></div>
      <div class="quick"><span data-i18n="quick">QUICK PLACES</span><button data-place="Chennai">Chennai</button><button data-place="Mumbai">Mumbai</button><button data-place="Delhi">Delhi</button><button data-place="Kolkata">Kolkata</button><button data-place="Bengaluru">Bengaluru</button></div><details class="location-manager"><summary>＋ Add a country, state / region, or district / city</summary><div><input id="newCountry" placeholder="Country"><input id="newState" placeholder="State / region"><input id="newCity" placeholder="District / city"><button type="button" id="addLocation">Add location</button></div><small>Enter a city to find it on the live map. Country and state are used to organise your saved locations.</small></details>
    </section>
    <section class="dashboard">
      <div class="weather-card card"><div class="card-top"><div><p class="label" id="placeLabel">TAMIL NADU · CHENNAI</p><h2 id="cityName">Chennai</h2><p class="updated" id="updated">Updating live conditions…</p></div><span class="weather-icon" id="weatherIcon">☀️</span></div><div class="temp"><strong id="temp">--°</strong><div><b id="condition">Loading…</b><span id="feels">Feels like --°</span></div></div><div class="metrics"><div><span>💧 Humidity</span><b id="humidity">--%</b></div><div><span>↗ Wind</span><b id="wind">-- km/h</b></div><div><span>☂ Rain</span><b id="rain">-- mm</b></div></div></div>
      <div class="map-card card"><div class="section-heading"><div><p class="label">GLOBAL LIVE WINDY MAP</p><h2>Worldwide weather — drag, zoom & explore</h2></div><div class="map-tools" aria-label="Windy layer"><button class="active" data-windy-layer="wind">Wind</button><button data-windy-layer="temp">Temperature</button><button data-windy-layer="pressure">Pressure</button></div></div><div class="map-layer-picker" aria-label="Windy map tools"><button class="layer-chip active" data-windy-view="world">◎ World</button><button class="layer-chip" data-windy-view="india">🇮🇳 India</button><button class="layer-chip" id="particlesToggle">✦ Particles: on</button><span class="windy-note">Windy testing API controls</span></div><div id="map"></div><div class="timeline" aria-label="Weather time navigator"><div class="timeline-head"><span id="timelineTitle">Local weather time navigator</span><button id="timelineLive" title="Jump to the newest available weather">● Live</button></div><div class="time-fields"><label>Year<input id="mapYear" inputmode="numeric" type="number" min="1940" max="2100"></label><label>Month<select id="mapMonth"></select></label><label>Day<select id="mapDay"></select></label><label>Hour<select id="mapHour"></select></label><label>Minute<select id="mapMinute"><option value="0">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option></select></label><button id="applyMapTime">View weather</button></div></div><div class="map-caption"><span><i></i> <span id="mapStatus">Global live Windy wind map</span></span><span>Worldwide view</span></div><div class="map-legend" id="mapLegend"><span>Use Windy controls above for live wind, temperature, pressure, particles, and world or India views.</span></div></div>
      <div class="radar-scrub legacy-controls" aria-hidden="true"><button id="radarBack">‹</button><input id="radarTimeline" type="range" min="0" max="0" value="0"><button id="radarForward">›</button><button id="radarPlay">▶</button></div><aside class="alerts card"><div class="section-heading"><div><p class="label">EARLY WARNING DESK</p><h2 data-i18n="alerts">Safety alerts</h2></div><span class="count" id="alertCount">0</span></div><div id="alertList" class="alert-list"></div><button class="text-button" id="alertRefresh">↻ Refresh risk assessment</button></aside>
    </section>
    <section class="lower-grid">
      <article class="forecast card"><div class="section-heading"><div><p class="label">NEXT 5 DAYS</p><h2 data-i18n="forecast">Forecast outlook</h2></div><span class="confidence">● HIGH CONFIDENCE</span></div><div id="forecastDays" class="forecast-days"></div><div class="explain"><span>✦</span><p><b>Why this forecast?</b><br><span id="explanation">We are combining local observations with model guidance to provide a simple, explainable outlook.</span></p></div></article>
      <article class="advisory card"><div class="section-heading"><div><p class="label">WEATHER → ACTION</p><h2 data-i18n="advisories">Personalised advisories</h2></div><select id="sector"><option value="farmer">🌾 Farmer</option><option value="marine">⚓ Fisher / Marine</option><option value="citizen">🏙 Citizen</option><option value="aviation">✈ Aviation</option></select></div><div id="advisoryContent"></div></article>
    </section>
    <section class="climate card"><div><p class="label">CLIMATE INTELLIGENCE</p><h2>See the pattern, prepare for the future.</h2><p>Past 30 days of observed temperature at your selected place. Use this view to turn a daily decision into a climate-aware one.</p><button class="outline" id="climateQuestion">Ask about climate trends →</button></div><div class="chart-wrap"><div class="chart-label"><b id="avgTemp">--°C</b><span>30-day average</span></div><svg id="climateChart" viewBox="0 0 520 150" role="img" aria-label="Temperature trend chart"></svg><div class="chart-foot"><span>30 days ago</span><span>Today</span></div></div></section>
    <section class="system-flow card" aria-labelledby="flowTitle"><div class="section-heading"><div><p class="label">WEATHERGPT INTELLIGENCE FLOW</p><h2 id="flowTitle">From question to safe action</h2></div><span class="confidence" id="flowState">● READY</span></div><p class="flow-intro">This live pipeline runs for every chat, voice, place, and time request.</p><div class="flow-grid"><div class="flow-node" id="flowUser"><b>1</b><span>USER</span><small>Text · Voice · Language</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowIntent"><b>2</b><span>WEATHERGPT</span><small>Intent + language router</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowLocation"><b>3</b><span>LOCATION</span><small>Selected city / map point</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowData"><b>4</b><span>DATA FUSION</span><small>Weather API · GFS model · official-alert adapter</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowRisk"><b>5</b><span>RISK ENGINE</span><small>Heat · rain · flood · wind</small></div><div class="flow-arrow">→</div><div class="flow-node" id="flowAction"><b>6</b><span>ACTION ROUTER</span><small>Farm · disaster · aviation · citizen</small></div><div class="flow-arrow">→</div><div class="flow-node output" id="flowOutput"><b>7</b><span>PERSONALISED ANSWER</span><small>Text · map · alerts · voice</small></div></div><div class="flow-result"><span>Latest run</span><b id="flowResult">Live monitoring is ready for Chennai.</b><small id="flowMeta">Sources: Open-Meteo forecast + GFS model context + Windy Map Forecast API</small></div></section>
  </main>
  
  <button class="assistant-launch" id="assistantLaunch"><span>✦</span><span><b>Ask WeatherGPT</b><small>Forecasts, alerts & actions</small></span><kbd>⌘ K</kbd></button>
  
  <section class="assistant-panel" id="assistantPanel" aria-label="WeatherGPT assistant">
    <div class="assistant-head">
      <div><span class="bot-dot">✦</span><div><b>WeatherGPT</b><small>Action intelligence assistant</small></div></div>
      <button id="closeAssistant">×</button>
    </div>
    <div class="chat" id="chat">
      <div class="bot-message">Hello! I am ready to help with weather, safety alerts, travel or farming decisions for <b id="chatLocation">Chennai</b>. What would you like to know?</div>
      <div class="suggestions"><button>Will it rain tomorrow?</button><button>Is it safe to travel?</button><button>What should farmers do?</button></div>
    </div>
    
    <!-- IMPORTANT: onsubmit="return false;" completely prevents the page from reloading -->
    <form id="chatForm" onsubmit="return false;">
      <button type="button" id="voice" title="Voice input">🎙</button>
      <input id="chatInput" placeholder="Ask about weather or safety…" autocomplete="off">
      <button class="send" id="sendBtn" type="button" aria-label="Send">↑</button>
    </form>
  </section>
  
  <footer><span>WeatherGPT prototype · Built for clearer weather decisions</span><span>Weather: Open-Meteo · Radar: RainViewer · Maps: OpenStreetMap / Esri</span></footer>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  
  <!-- Windy Map Script -->
  <script>
    (function () {
      const windyKey = 'BufL8T0J8DFjZfCweXXI7FloiQJW60db';
      const host = document.querySelector('#map');
      document.querySelector('link[href*="leaflet@1.9.4"]')?.remove();
      window.L = undefined;
      host.innerHTML = '<div id="windy" aria-label="Live worldwide Windy map"></div>';
      const style = document.createElement('style');
      style.textContent = '#windy{width:100%;height:100%;min-height:560px;background:#143b56}';
      document.head.append(style);
      const leaflet = document.createElement('script');
      leaflet.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
      leaflet.onload = function () {
        const windyLib = document.createElement('script');
        windyLib.src = 'https://api.windy.com/assets/map-forecast/libBoot.js';
        windyLib.onload = function () {
          windyInit({key: windyKey, lat: 15, lon: 0, zoom: 2, overlay: 'wind', level: 'surface', verbose: true}, function (api) {
            window.weatherGPTWindy = api;
            const redraw = () => { api.map.invalidateSize(true); api.store.set('overlay', 'wind'); api.store.set('level', 'surface'); };
            setTimeout(redraw, 300); setTimeout(redraw, 1200); window.addEventListener('resize', redraw);
            const choose = layer => { api.store.set('overlay', layer); document.querySelectorAll('[data-windy-layer]').forEach(b => b.classList.toggle('active', b.dataset.windyLayer === layer)); document.querySelector('#mapStatus').textContent = `Global live Windy ${layer === 'temp' ? 'temperature' : layer} map`; };
            document.querySelectorAll('[data-windy-layer]').forEach(button => button.onclick = () => choose(button.dataset.windyLayer));
            document.querySelectorAll('[data-windy-view]').forEach(button => button.onclick = () => { const india = button.dataset.windyView === 'india'; api.map.setView(india ? [21,79] : [15,0], india ? 5 : 2); document.querySelectorAll('[data-windy-view]').forEach(b => b.classList.toggle('active', b === button)); });
            let particles = true; document.querySelector('#particlesToggle').onclick = () => { particles = !particles; api.store.set('particlesAnim', particles); document.querySelector('#particlesToggle').textContent = `✦ Particles: ${particles ? 'on' : 'off'}`; };
            document.querySelectorAll('[data-windy-layer]').forEach(b => b.classList.toggle('active', b.dataset.windyLayer === 'wind'));
            document.querySelector('#mapStatus').textContent = 'Global live Windy wind map · drag, zoom, and choose layers directly on the map';
          });
        };
        windyLib.onerror = function () { host.innerHTML = '<div class="windy-error">Windy map could not load.</div>'; };
        document.head.append(windyLib);
      };
      leaflet.onerror = function () { host.innerHTML = '<div class="windy-error">Map library could not load.</div>'; };
      document.head.append(leaflet);
    }());
  </script>

  <!-- WeatherGPT Intelligence Flow -->
  <script>
    (function () {
      const nodeIds = ['flowUser','flowIntent','flowLocation','flowData','flowRisk','flowAction','flowOutput'];
      const $flow = id => document.getElementById(id);
      function inferIntent(text) {
        const q = String(text || '').toLowerCase();
        if (/flood|rain|storm|thunder/.test(q)) return 'rain / flood safety';
        if (/heat|hot|heatstroke/.test(q)) return 'heat safety';
        if (/farm|crop|irrigat/.test(q)) return 'farm advisory';
        if (/flight|aviation|airport/.test(q)) return 'aviation advisory';
        if (/travel|road|drive/.test(q)) return 'travel safety';
        return 'local weather briefing';
      }
      function impact() {
        const d = window.state?.data || {}, rain = window.state?.daily?.precipitation_probability_max?.[0] || 0;
        const risks = [];
        if ((d.apparent_temperature || 0) >= 39) risks.push('heat stress');
        if ((d.precipitation || 0) >= 8 || rain >= 75 || (d.weather_code || 0) >= 80) risks.push('flood / heavy rain');
        if ((d.wind_speed_10m || 0) >= 35) risks.push('strong wind');
        return risks.length ? risks.join(', ') : 'no high-impact threshold';
      }
      function runFlow(input, channel) {
        const intent = inferIntent(input), sector = document.getElementById('sector')?.value || 'citizen';
        nodeIds.forEach(id => $flow(id)?.classList.remove('active'));
        nodeIds.forEach((id, index) => setTimeout(() => $flow(id)?.classList.add('active'), index * 110));
        const risk = impact();
        const city = window.state?.city || 'Chennai';
        $flow('flowResult').textContent = `${channel} → ${intent} for ${city}; risk assessment: ${risk}; action route: ${sector}.`;
        $flow('flowMeta').textContent = `Live source: Open-Meteo API · NWP context: GFS · Map: Windy Map API`;
        $flow('flowState').textContent = '● PROCESSING';
        setTimeout(() => { $flow('flowState').textContent = '● ACTION READY'; }, 850);
      }
      window.WeatherGPTIntelligence = { run: runFlow, inferIntent, impact };
      const chat = document.getElementById('chat');
      new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
        if (node.classList?.contains('user-message')) runFlow(node.textContent, 'User input');
      }))).observe(chat, {childList:true});
      document.getElementById('update')?.addEventListener('click', () => setTimeout(() => runFlow('Place updated', 'Location selector'), 250));
      document.getElementById('locate')?.addEventListener('click', () => setTimeout(() => runFlow('Live location update', 'Device location'), 500));
      document.getElementById('sector')?.addEventListener('change', e => runFlow('Advisory sector changed', e.target.value));
      runFlow('Live monitoring', 'System');
    }());
  </script>

  <!-- Location & Translation Script -->
  <script>
    (function () {
      const packs = {
        hi:{live:'लाइव डेटा',title:'मौसम जानें।<br><em>क्या करना है, जानें।</em>',subtitle:'वास्तविक समय का मौसम स्पष्ट स्थानीय कार्यों में बदलता है।',alerts:'सुरक्षा अलर्ट',forecast:'पूर्वानुमान',advisories:'व्यक्तिगत सलाह',add:'＋ देश, राज्य / क्षेत्र या शहर जोड़ें',button:'स्थान जोड़ें',city:'जिला / शहर',state:'राज्य / क्षेत्र',country:'देश'},
        ta:{live:'நேரலை தரவு',title:'வானிலையை அறிக.<br><em>என்ன செய்ய வேண்டும் என அறிக.</em>',subtitle:'நிகழ்நேர வானிலை தெளிவான உள்ளூர் செயல்களாக மாறுகிறது.',alerts:'பாதுகாப்பு எச்சரிக்கைகள்',forecast:'முன்னறிவிப்பு',advisories:'தனிப்பயன் ஆலோசனைகள்',add:'＋ நாடு, மாநிலம் / பகுதி அல்லது நகரம் சேர்க்கவும்',button:'இடம் சேர்க்கவும்',city:'மாவட்டம் / நகரம்',state:'மாநிலம் / பகுதி',country:'நாடு'}
      };
      document.getElementById('language').onchange = e => {
        if (e.target.value === 'en') { location.reload(); return; }
        const t = packs[e.target.value]; if (!t) return;
        document.querySelectorAll('[data-i18n]').forEach(el => { if (t[el.dataset.i18n]) el.innerHTML = t[el.dataset.i18n]; });
        document.querySelector('.location-manager summary').textContent = t.add;
        document.getElementById('addLocation').textContent = t.button;
        document.getElementById('newCountry').placeholder = t.country;
        document.getElementById('newState').placeholder = t.state;
        document.getElementById('newCity').placeholder = t.city;
        document.getElementById('updated').textContent = '✓ ' + t.live;
      };
    }());
  </script>
  <script>
    (function () {
      const map = document.getElementById('map'), panel = document.getElementById('assistantPanel');
      if (!map || !panel || panel.classList.contains('map-docked')) return;
      const workspace = document.createElement('div'); workspace.className = 'map-workspace';
      map.parentNode.insertBefore(workspace, map); workspace.append(map, panel);
      panel.classList.add('map-docked', 'open');
      document.getElementById('closeAssistant').style.display = 'none';
    }());
  </script>

  <!-- ALL APP LOGIC + GEMINI AI CODE -->
  <script>
    const places={India:{'Tamil Nadu':['Chennai','Coimbatore','Madurai'],Maharashtra:['Mumbai','Pune','Nagpur'],Karnataka:['Bengaluru','Mysuru','Mangaluru'],'Delhi NCR':['New Delhi','Gurugram','Noida'],West_Bengal:['Kolkata','Darjeeling','Siliguri']}};
    const coords={Chennai:[13.0827,80.2707],Mumbai:[19.076,72.8777],Delhi:[28.6139,77.209],Kolkata:[22.5726,88.3639],Bengaluru:[12.9716,77.5946],Coimbatore:[11.0168,76.9558],Madurai:[9.9252,78.1198],Pune:[18.5204,73.8567],Nagpur:[21.1458,79.0882],Mysuru:[12.2958,76.6394],Mangaluru:[12.9141,74.856],'New Delhi':[28.6139,77.209],Gurugram:[28.4595,77.0266],Noida:[28.5355,77.391],Darjeeling:[27.036,88.2627],Siliguri:[26.7271,88.3953]};
    const fallback={temperature_2m:31,relative_humidity_2m:71,apparent_temperature:36,precipitation:0,weather_code:2,wind_speed_10m:16}, weatherKeys='temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m';
    window.state={city:'Chennai',lat:13.0827,lon:80.2707,data:fallback,daily:null,selected:new Date(),isLive:true};
    let map,marker,street,satellite,radarLayer,hazards,windLayer,frames=[],frame=0,playTimer;
    
    const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],pad=n=>String(n).padStart(2,'0'),dateKey=d=>d.toISOString().slice(0,10);
    const icon=c=>c===0?'☀️':c<=2?'🌤️':c<=48?'☁️':c<=67?'🌦️':c<=77?'❄️':'⛈️',description=c=>c===0?'Clear sky':c<=2?'Mostly clear':c<=48?'Cloudy':c<=67?'Rain showers':c<=77?'Snow showers':'Thunderstorms';

    function populate(){let p=places[$('#country').value];if(p){$('#state').innerHTML=Object.keys(p).map(x=>`<option value="${x}">${x.replaceAll('_',' ')}</option>`).join('');populateDistrict()}}
    function populateDistrict(){let a=places[$('#country').value]?.[$('#state').value]\vert{}\vert{}[];$('#district').innerHTML=a.map(x=>`<option>${x}</option>`).join('')}
    function active(selector,value){$$(selector).forEach(x=>x.classList.toggle('active',x.dataset.mode===value||x.dataset.overlay===value))}

    function initMap(){map=L.map('map',{zoomControl:false}).setView([window.state.lat,window.state.lon],7);L.control.zoom({position:'bottomright'}).addTo(map);street=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:19}).addTo(map);satellite=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Tiles © Esri'});marker=L.marker([window.state.lat,window.state.lon]).addTo(map);hazards=L.layerGroup();windLayer=L.layerGroup();map.on('click',e=>{Object.assign(window.state,{city:'Pinned map point',lat:e.latlng.lat,lon:e.latlng.lng,isLive:true});setTime(new Date());getWeather(true)})}
    function risk(){let d=window.state.data,p=window.state.daily?.precipitation_probability_max?.[0]||0;return {heat:d.apparent_temperature>=40||d.temperature_2m>=36,flood:d.weather_code>=80||d.precipitation>=8||p>=75,wind:d.wind_speed_10m>=30,rain:d.weather_code>=51||p>=45}}
    function drawHazards(kind='all'){hazards.clearLayers();windLayer.clearLayers();let r=risk(),d=window.state.data,c=[window.state.lat,window.state.lon],add=(colour,title,sub,radius=30000)=>L.circle(c,{radius,color:colour,fillColor:colour,fillOpacity:.22,weight:2}).bindTooltip(`<b>${title}</b><br>${sub}`,{permanent:true,direction:'top',className:'hazard-label'}).addTo(hazards);if((kind==='all'||kind==='heat')&&r.heat)add('#e8513f','HEAT STRESS',`Feels ${Math.round(d.apparent_temperature)}°C`);if((kind==='all'||kind==='flood')&&r.flood)add('#2274c9','FLOOD WATCH','Heavy-rain signal detected',40000);if((kind==='all'||kind==='wind')&&r.wind)L.circle(c,{radius:26000,color:'#7c4dff',fillColor:'#7c4dff',fillOpacity:.18}).bindTooltip(`<b>WIND ADVISORY</b><br>${Math.round(d.wind_speed_10m)} km/h`,{permanent:true,direction:'bottom',className:'hazard-label'}).addTo(windLayer);if(!r.heat&&!r.flood&&!r.wind&&kind==='all')add('#16a86b','LOW CURRENT RISK','No high-impact local signal',18000);if(kind!=='wind')hazards.addTo(map);if(kind==='wind'||r.wind)windLayer.addTo(map)}
    function clearOverlays(){[radarLayer,hazards,windLayer].forEach(x=>x&&map.hasLayer(x)&&map.removeLayer(x))}function selectOverlay(type){$('#map').dataset.overlay=type;active('.layer-chip',type);clearOverlays();if(type==='radar'){radarLayer?radarLayer.addTo(map):loadRadar()}else drawHazards(type);$('#mapStatus').textContent=type==='radar'?'Live precipitation radar':type==='heat'?'Heat stress risk layer':type==='flood'?'Flood watch risk layer':'Wind advisory layer'}
    function selectMode(mode){active('.map-tools button',mode);if(mode==='satellite'){map.removeLayer(street);satellite.addTo(map);selectOverlay('radar')}else{map.removeLayer(satellite);street.addTo(map);mode==='hazards'?(selectOverlay('heat'),drawHazards('all')):selectOverlay('radar')}}

    async function loadRadar(){try{let r=await fetch('https://api.rainviewer.com/public/weather-maps.json');if(!r.ok)throw 0;let x=await r.json();frames=[...(x.radar?.past||[]),...(x.radar?.nowcast||[])];if(!frames.length)throw 0;frame=frames.length-1;$('#radarTimeline').max=frame;showRadar(frame)}catch{$('#timelineTitle').textContent='Radar unavailable'}}
    function showRadar(index){if(!frames.length)return;frame=Math.max(0,Math.min(frames.length-1,+index));$('#radarTimeline').value=frame;if(radarLayer)map.removeLayer(radarLayer);let f=frames[frame];radarLayer=L.tileLayer(`https://tilecache.rainviewer.com${f.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.72,zIndex:4});if($('#map').dataset.overlay==='radar'\vert{}\vert{}!$('#map').dataset.overlay)radarLayer.addTo(map);let t=new Date(f.time*1000);$('#timelineTitle').textContent=`Live radar playback · ${t.toLocaleString([],{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}`;$('#mapStatus').textContent=`Radar frame · ${t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`}
    function setTime(d){$('#mapYear').value=d.getFullYear();$('#mapMonth').value=d.getMonth()+1;days();$('#mapDay').value=d.getDate();$('#mapHour').value=d.getHours();$('#mapMinute').value=Math.floor(d.getMinutes()/15)*15}function days(){let n=new Date(+$('#mapYear').value,+$('#mapMonth').value,0).getDate(),old=+$('#mapDay').value\vert{}\vert{}1;$('#mapDay').innerHTML=Array.from({length:n},(_,i)=>`<option value="${i+1}">${pad(i+1)}</option>`).join('');$('#mapDay').value=Math.min(old,n)}function readTime(){return new Date(+$('#mapYear').value,+$('#mapMonth').value-1,+$('#mapDay').value,+$('#mapHour').value,+$('#mapMinute').value)}

    async function getWeather(live=false){let chosen=live?new Date():window.state.selected;window.state.isLive=live;window.state.selected=chosen;let today=new Date(),ahead=(chosen-today)/864e5,date=dateKey(chosen);$('#updated').textContent=live?'Fetching live weather…':'Loading selected time…';try{let url=live||ahead>-2&&ahead<16?`https://api.open-meteo.com/v1/forecast?latitude=${window.state.lat}&longitude=${window.state.lon}&current=${weatherKeys}&hourly=${weatherKeys}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&past_days=30`:`https://archive-api.open-meteo.com/v1/archive?latitude=${window.state.lat}&longitude=${window.state.lon}&start_date=${date}&end_date=${date}&hourly=${weatherKeys}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;let res=await fetch(url);if(!res.ok)throw 0;let x=await res.json();window.state.daily=x.daily;if(live&&x.current)window.state.data=x.current;else{let target=`${date}T${pad(chosen.getHours())}:00`,i=Math.max(0,(x.hourly?.time||[]).findIndex(v=>v===target));window.state.data=Object.fromEntries(weatherKeys.split(',').map(k=>[k,x.hourly?.[k]?.[i]??fallback[k]]))}let stamp=live?'Live · '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}):`${chosen.toLocaleDateString([],{year:'numeric',month:'short',day:'numeric'})} · ${pad(chosen.getHours())}:${pad(chosen.getMinutes())}`;$('#updated').textContent=stamp;if(!live)$('#timelineTitle').textContent=`Selected point weather · ${stamp}`;render()}catch{window.state.data=fallback;window.state.daily=null;$('#updated').textContent='Demo data shown';render()}}
    function render(){let d=window.state.data;$('#cityName').textContent=window.state.city;$('#chatLocation').textContent=window.state.city;$('#placeLabel').textContent=`${window.state.city.toUpperCase()} · ${window.state.lat.toFixed(2)}°, ${window.state.lon.toFixed(2)}°`;$('#temp').textContent=Math.round(d.temperature_2m)+'°';$('#condition').textContent=description(d.weather_code);$('#feels').textContent='Feels like '+Math.round(d.apparent_temperature)+'°';$('#weatherIcon').textContent=icon(d.weather_code);$('#humidity').textContent=Math.round(d.relative_humidity_2m)+'%';$('#wind').textContent=Math.round(d.wind_speed_10m)+' km/h';$('#rain').textContent=(d.precipitation||0)+' mm';marker.setLatLng([window.state.lat,window.state.lon]).bindPopup(`<b>${window.state.city}</b><br>${Math.round(d.temperature_2m)}°C`);map.setView([window.state.lat,window.state.lon],Math.max(map.getZoom(),7));forecast();alerts();advice();chart();if($('#map').dataset.overlay&&$('#map').dataset.overlay!=='radar')selectOverlay($('#map').dataset.overlay)}
    function forecast(){let a=window.state.daily?.time?.slice(0,5)||Array.from({length:5},(_,i)=>[new Date(Date.now()+i*864e5).toISOString().slice(0,10)]),d=window.state.daily;$('#forecastDays').innerHTML=a.map((x,i)=>{let c=d?.weather_code?.[i]??[2,3,61,61,2][i],hi=d?.temperature_2m_max?.[i]??31,lo=d?.temperature_2m_min?.[i]??25,p=d?.precipitation_probability_max?.[i]??16;return `<div class="day"><span>${i?' '+new Date(x).toLocaleDateString('en',{weekday:'short'}):'Today'}</span><i>${icon(c)}</i><b>${Math.round(hi)}° <small>${Math.round(lo)}°</small></b><small>☂ ${p}%</small></div>`}).join('');$('#explanation').textContent=(d?.precipitation_probability_max?.slice(0,3).some(x=>x>50))?'Rain probability rises. Keep plans flexible.':'Stable conditions expected.'}
    function alerts(){let d=window.state.data,p=window.state.daily?.precipitation_probability_max?.[0]||0,a=[];if(d.weather_code>=80||p>=75||d.precipitation>=8)a.push(['🌊','Flood watch','Avoid low-lying roads.','HIGH']);if(d.temperature_2m>=35||d.apparent_temperature>=39)a.push(['☀️','Heat advisory','Hydrate, seek shade.','MODERATE']);if(d.wind_speed_10m>=35)a.push(['💨','Wind advisory','Secure loose objects.','MODERATE']);if(!a.length)a.push(['✓','No alert','Current conditions show no high-impact signal.','LOW RISK']);$('#alertCount').textContent=a.length;$('#alertList').innerHTML=a.map(x=>`<div class="alert-item"><i>${x[0]}</i><div><b>${x[1]}</b><p>${x[2]}</p><span class="tag">${x[3]}</span></div></div>`).join('')}
    const tips={farmer:['Farm-smart plan','Check irrigation.','Schedule spraying carefully.','Keep produce covered.'],marine:['Marine safety','Check official bulletin.','Carry safety equipment.','Return if winds build.'],citizen:['Local safety','Carry water.','Check routes before travel.','Enable phone alerts.'],aviation:['Aviation snapshot','Review NOTAMs.','Monitor wind changes.','Keep alternate routing ready.']};function advice(){let a=tips[$('#sector').value];$('#advisoryContent').innerHTML=`<h3 class="advice-title">${a[0]}</h3><ul class="actions">${a.slice(1).map(x=>`<li>${x}</li>`).join('')}</ul>`}function chart(){let a=window.state.daily?.temperature_2m_max?.slice(0,31)||Array.from({length:31},(_,i)=>29+Math.sin(i*.52)*2),min=Math.min(...a)-1,max=Math.max(...a)+1,w=520,h=150,p=a.map((v,i)=>`${i/(a.length-1)*w},${h-16-(v-min)/(max-min)*(h-35)}`).join(' ');$('#climateChart').innerHTML=`<polyline points="${p}" fill="none" stroke="#18a972" stroke-width="3" stroke-linecap="round"/>`;$('#avgTemp').textContent=(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1)+'°C'}
    function update(city){let p=coords[city];if(p){Object.assign(window.state,{city,lat:p[0],lon:p[1],isLive:true});setTime(new Date());getWeather(true)}}

    $('#country').onchange=populate;$('#state').onchange=populateDistrict;$('#update').onclick=()=>update($('#district').value);$$('[data-place]').forEach(b=>b.onclick=()=>update(b.dataset.place));$('#sector').onchange=advice;$('#alertRefresh').onclick=()=>getWeather(window.state.isLive);$('#locate').onclick=()=>navigator.geolocation?.getCurrentPosition(p=>{Object.assign(window.state,{city:'Your location',lat:p.coords.latitude,lon:p.coords.longitude});setTime(new Date());getWeather(true)});$('#timelineLive').onclick=()=>{setTime(new Date());getWeather(true);selectOverlay('radar');loadRadar()};$('#applyMapTime').onclick=()=>{window.state.selected=readTime();getWeather(false);selectOverlay('heat')};$('#mapMonth').onchange=days;$('#mapYear').onchange=days;$('#radarTimeline').oninput=e=>showRadar(e.target.value);$('#radarBack').onclick=()=>showRadar(frame-1);$('#radarForward').onclick=()=>showRadar(frame+1);$('#radarPlay').onclick=()=>{if(playTimer){clearInterval(playTimer);playTimer=null;$('#radarPlay').textContent='▶'}else{$('#radarPlay').textContent='❚❚';playTimer=setInterval(()=>showRadar((frame+1)%frames.length),650)}};$$('.map-tools button').forEach(b=>b.onclick=()=>selectMode(b.dataset.mode));$$('.layer-chip').forEach(b=>b.onclick=()=>selectOverlay(b.dataset.overlay));

    const panel=$('#assistantPanel');
    function message(t,who){let x=document.createElement('div');x.className=who+'-message';x.textContent=t;$('#chat').append(x);$('#chat').scrollTop=9999}

    // --- GEMINI AI CHAT LOGIC ---
    async function reply(q) {
      let d = window.state.data;
      let context = `At ${window.state.city}: ${Math.round(d.temperature_2m)}°C, ${description(d.weather_code).toLowerCase()}, humidity ${Math.round(d.relative_humidity_2m)}%, wind ${Math.round(d.wind_speed_10m)} km/h.`;
      let prompt = `You are WeatherGPT, a helpful weather and safety AI. Keep answers concise. Current weather context: ${context}. User asks: ${q}`;
      
      let key = 'AQ.Ab8RN6J0oEOYCHnFGkC6CELnTt2FrKQbJeuvGX5GJmgIQ8yMZQ';
      
      try {
        let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        
        let data = await res.json();
        
        // This will now print EXACTLY why the API key is failing right into the chat
        if (data.error) {
          message("🚨 GOOGLE API ERROR: " + data.error.message, 'bot');
          return;
        }
        
        let ans = data.candidates?.[0]?.content?.parts?.[0]?.text || "No text generated.";
        message(ans, 'bot');
      } catch (e) {
        message("🚨 NETWORK ERROR: " + e.message, 'bot');
      }
    }

    // Capture the button click OR pressing Enter
    function submitChat() {
      let q = $('#chatInput').value.trim();
      if(q) {
        message(q, 'user');
        $('#chatInput').value = '';
        reply(q);
      }
    }
    
    // Wire up the button
    $('#sendBtn').onclick = submitChat;
    
    // Wire up the Enter key
    $('#chatInput').addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Physically blocks the page from refreshing
        submitChat();
      }
    });
    // ----------------------------

    $('#assistantLaunch').onclick=()=>panel.classList.toggle('open');
    $('#closeAssistant').onclick=()=>panel.classList.remove('open');     $$('.suggestions button').forEach(b=>b.onclick=()=>{message(b.textContent,'user');reply(b.textContent)});$('#climateQuestion').onclick=()=>{panel.classList.add('open');message(`What climate trend would you like to understand for ${window.state.city}?`,'bot')};
    function initTime(){let n=new Date();$('#mapMonth').innerHTML=Array.from({length:12},(_,i)=>`<option value="${i+1}">${new Date(2020,i).toLocaleString('en',{month:'short'})}</option>`).join('');$('#mapHour').innerHTML=Array.from({length:24},(_,i)=>`<option value="${i}">${pad(i)}</option>`).join('');setTime(n)}populate();initTime();initMap();selectOverlay('radar');loadRadar();getWeather(true);
  </script>
</body>
</html>
