document.getElementById('add-proposition').addEventListener('click',()=>{
    const div =document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    const input = document.createElement('input');
    input.type = 'texte'
    input.placeholder='prposition'
    div.appendChild(checkbox);
    div.appendChild(input);
    document.getElementById('proposition').appendChild(div);
})