export default function CardComponent({data}){
    console.log("data is received",data);
    return (
        <div>
            {data.articles.map((el, index) => (
                <div key={index}>
                    <p>{el.slug}</p>
                </div>
            ))}
        </div>
    );
}