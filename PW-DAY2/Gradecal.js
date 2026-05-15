function StudentScore(Mark)
{
    switch (true) 
    {
        case (Mark>90 && Mark<=100):
            console.log("Grade A")
            break;
        case (Mark>80 && Mark<=90):
            console.log("Grade B")
            break;
        case (Mark>70 && Mark<=80):
            console.log("Grade C")
            break;
        case (Mark>60 && Mark<=70):
            console.log("Grade D")
            break;
        case (Mark>=50 && Mark<=60):
            console.log("Grade E")
            break;
        default:
            console.log("Fail")
            break;
    }
}
StudentScore(90)