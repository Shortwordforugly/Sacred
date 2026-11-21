const presets = {
  press: { title: 'PRESIDENT MARCOS SAID “QUICK UPDATE”', reaction: 'THE CLICKER HAS STAGE FRIGHT.' },
  vp: { title: 'VP SARA ENTERED THE NEWS CYCLE', reaction: 'THE GROUP CHAT NEEDS A RECAP EPISODE.' },
  session: { title: 'WHEN THE AGENDA SAYS “BRIEF”', reaction: 'THE SUN HAS SET. THE MIC IS STILL ON.' },
  promise: { title: 'WHEN YOU SAY “MONDAY, I RESET”', reaction: 'MONDAY HAS REQUESTED A POSTPONEMENT.' },
  budget: { title: 'WHEN YOU CHECK YOUR ACCOUNT', reaction: 'THE SPREADSHEET HAS ENTERED ITS DRAMA ERA.' }
};
const template = document.querySelector('#template');
const situation = document.querySelector('#situation');
const reaction = document.querySelector('#reaction');
const title = document.querySelector('#memeTitle');
const response = document.querySelector('#memeReaction');
document.querySelector('#generate').addEventListener('click', () => {
  const preset = presets[template.value];
  title.textContent = situation.value.trim() ? `WHEN ${situation.value.trim().toUpperCase()}` : preset.title;
  response.textContent = reaction.value.trim() ? reaction.value.trim().toUpperCase() : preset.reaction;
});
