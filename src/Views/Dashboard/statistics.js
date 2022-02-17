import React from "react";
import DashLayout from "../../Components/DashboardLayout";
import { DollarOutlined, ShoppingCartOutlined, FolderOutlined } from '@ant-design/icons';
import { BarChart } from "reaviz"

const data = [
    {
        key: 'jan',
        data: 74
    },
    {
        key: 'Feb',
        data: 84
    },
    {
        key: 'Mar',
        data: 78
    },
    {
        key: 'Apr',
        data: 96
    },
    {
        key: 'May',
        data: 90
    },
    {
        key: 'Jun',
        data: 67
    },
    {
        key: 'Jul',
        data: 97
    },
    {
        key: 'Aug',
        data: 100
    },
    {
        key: 'Sept',
        data: 90
    }

];


const Statistics = () => {
    return (
        <DashLayout>
            <div className="statistics-container">

                <div className="updates-container">

                    <div className="updates">
                        <div className="head" ><DollarOutlined />
                        <p>total sales</p> 
                        </div>
                      <p style={{marginTop:"10px", marginLeft:"30px"}}>14,350</p>
                    </div>
                    <div className="updates">
                        <div className="head" ><ShoppingCartOutlined  />
                        <p>total orders</p> 
                        </div>
                      <p style={{marginTop:"10px", marginLeft:"30px"}}>373</p>
                    </div>
                    <div className="updates">
                        <div className="head" ><FolderOutlined />
                        <p>total products</p> 
                        </div>
                      <p style={{marginTop:"10px", marginLeft:"30px"}}>140</p>
                    </div>
                </div>
                <div style={{ paddingLeft: "280px", paddingTop: "25px", textAlign: 'center' }}>
                    <BarChart className="chart" width={500} height={300} data={data} />
                </div>
            </div>
        </DashLayout>
    )
}

export default Statistics;
