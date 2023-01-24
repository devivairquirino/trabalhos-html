function mana(inicial,compra)
{
    if (compra==0){return 0}

    else{return inicial+mana(inicial+10,compra -1)}
}

console.log(mana(110,6))
