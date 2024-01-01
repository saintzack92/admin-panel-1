export async function  GET(req,res,next){
    let users=[
        {
            id:1,
            name:'abdullah chaniago',
            email: 'abdullah.chaniago92@gmail.com',
        },
        {
            id:2,
            name:'syarah muthia',
            email: 'syarah.muthia@gmail.com',
        },
        {
            id:3,
            name:'mikhail armiya',
            email: 'mikhail.armiya@gmail.com',
        },
        {
            id:4,
            name:'alina sofiya',
            email: 'alina.sofiya@gmail.com',
        }
    ]

    let data=JSON.stringify(users)

    return new Response(data , {status: 200})
}