/* Nicko's Adventures - shared world state (tiny, dependency-free).
   Loaded by each of the six game rooms BEFORE the room engine.
   - sound on/off  -> localStorage (persists across rooms and visits)
   - current room  -> localStorage (remembers where the child was)
   - discoveries   -> sessionStorage (e.g. grown flowers; kept for the play
                      session only, cleared when the tab/session ends)
   No accounts, no personal data, no tracking. Safe for a kids' game. */
(function(){
  "use strict";
  var LS_KEY = "nickoAdventures";
  var SS_KEY = "nickoAdventuresSession";
  function read(store, key){
    try { return JSON.parse(store.getItem(key)) || {}; }
    catch(e){ return {}; }
  }
  function write(store, key, obj){
    try { store.setItem(key, JSON.stringify(obj)); } catch(e){}
  }
  function ls(){ return read(localStorage, LS_KEY); }
  function putLs(s){ write(localStorage, LS_KEY, s); }
  window.NK = {
    get sound(){ return ls().sound !== false; },       /* default: sound ON */
    set sound(v){ var s = ls(); s.sound = !!v; putLs(s); },
    get room(){ return ls().room || null; },
    set room(v){ var s = ls(); s.room = v; putLs(s); },
    session: {
      get: function(k){ return read(sessionStorage, SS_KEY)[k]; },
      set: function(k, v){ var s = read(sessionStorage, SS_KEY); s[k] = v; write(sessionStorage, SS_KEY, s); }
    }
  };
})();
