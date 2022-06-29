'use script';

const name_wrap=document.getElementById('name_wrap')
const lname_wrap=document.getElementById('lname_wrap')
const fathername_wrap=document.getElementById('fathername_wrap')
const age_wrap=document.getElementById('age_wrap')
const num_wrap=document.getElementById('num_wrap')

const fname=document.getElementById('firstname')
const lname=document.getElementById('lastname')
const fathername=document.getElementById('fathername')
const age=document.getElementById('age')
const num=document.getElementById('num')

function validateElement(val, condition, wrap)
{
    wrap.clasList.remove('error', 'error_novalue')

    if(!val)
    {
        wrap.clasList.add('error','error_novalue')}
    else if (!condition)
    {
        wrap.clasList.add('error')
    }
}
document.getElementById('button').addEventListener('click', (e)=>{
    e.preventDefault()
    validateElement(fname.value, fname.value.lenght >=3, name_wrap)
    validateElement(lname.value, lname.value.lenght <=30, lname_wrap)
    validateElement(fathername.value, fathername.value.lenght <=30, fathername_wrap)
    validateElement(age.value, age.value.lenght <=15, age_wrap)
    validateElement(num.value, num.value.lenght >=11, num_wrap)

    if(fname.value && fname.value.lenght >=3 && lname.value && lname.value.lenght <=30 && fathername.value && fathername.value.lenght <=30 && 
        age.value && age.value.lenght <=15 && num.value && num.value.lenght >=11)
        {
            alert('Заявка отправлена. Администратор свяжется с вами в ближайшее время!');
        }
 
})