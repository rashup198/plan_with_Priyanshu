
import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div>
            <div>
                <h2>Plan with Priyanshu</h2>
            </div>
            <div>
                {
                    tours.map( (tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> //{...tours} passes the whole object 
                    })
                }
            </div>
        </div>
    )
}

export default Tours;