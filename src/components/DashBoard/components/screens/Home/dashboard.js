import './dashboard.scss';
import TopBox from "../../topBox/TopBox";
import ChartBox from "../../chartBox/ChartBox";
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser
} from "../../../data";
import BarChartBox from "../../barChartBox/BarChartBox";
import PieChartBox from "../../pieChartBox/PieChartBox";
import BigChartBox from "../../bigChartBox/BigChartBox";

const Dashboard = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox/>
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser}/>
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct}/>
            </div>
            <div className="box box4">
                <PieChartBox/>
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion}/>
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue}/>
            </div>
            <div className="box box7">
                <BigChartBox/>
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit}/>
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue}/>
            </div>
        </div>
    );
};

export default Dashboard;