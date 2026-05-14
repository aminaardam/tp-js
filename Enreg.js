document.getElementById('form-question').addEventListener('submit', function(e) {

 e.preventDefault();

 const proprietaire = document.getElementById('proprietaire').value;

 const nomExamen = document.getElementById('nom-examen').value;

 const enonce = document.getElementById('enonce').value;

 const duree = document.getElementById('duree').value;

 const points = document.getElementById('points').value;
 const propositions = [];

 document.querySelectorAll('#propositions div').forEach(div => {

  const texte = div.querySelector('input[type="text"]').value;

  const correcte = div.querySelector('input[type="checkbox"]').checked;

  propositions.push({
   texte: texte,
   correcte: correcte
  });

 });

 const key = 'examens_' + proprietaire;

 const exams = JSON.parse(localStorage.getItem(key)) || [];

 const exam = exams.find(e => e.nom === nomExamen);
 if (!exam) {
  alert('Examen introuvable');
  return;
 }
 const question = {
  enonce: enonce,
  duree: duree,
  points: points,
  propositions: propositions
 };
 exam.questions.push(question);
 localStorage.setItem(key, JSON.stringify(exams));

 alert('Question ajoutée avec succès !');

 this.reset();

 document.getElementById('propositions').innerHTML = '';

});