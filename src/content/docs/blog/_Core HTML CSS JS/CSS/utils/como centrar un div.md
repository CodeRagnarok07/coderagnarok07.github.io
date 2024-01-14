# como centrar un div:
    
```css

cd1{
    display:grid;
    place-items: center;
}

cd2{
    display:flex;
    justify-content:center;
    align-items: center;
}

cd3{
    display:block;
    margin-left:auto;
    margin-right:auto;
}

cd4{
    position:absolute;
    Top:50%;
    Left:50%;
    transform: translate (-50%, -50%)
}

```