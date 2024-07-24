import { Carousel } from "antd";

export const Projects = () => {
    return (<>
     <Carousel arrows infinite={false}>
        <div className="h-40">
            <h1 className="text-center">Testing</h1>
        </div>
        <div className="h-40 ">
            <h1 className="text-center" >Testing</h1>
        </div>
        <div className="h-40">
            <h1 className="text-center">Testing</h1>
        </div>
     </Carousel>
    </>);
}
 
export default Projects
