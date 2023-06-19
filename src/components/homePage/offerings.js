import React,{ useState }  from "react";
import { Menu,Button, Card } from 'antd';
import { dev1,dev2,dev3, graph1, graph2, graph3 } from "./constants/imageUrls";
import Roll from 'react-reveal/Roll';
const { Meta } = Card;
const items = [
  {
    label: 'ALL',
    key: 'all',
  },
  {
    label: 'DASHBOARD',
    key: 'dash',
  },
  {
    label: 'DEVICE',
    key: 'device',
  },
  
  
];

const dashboards = [
    { imageUrl: graph1, title: 'Dashboard', desc: 'Machine Performance'},
    { imageUrl: graph2, title: 'Dashboard', desc: 'Live Data Streaming'},
    { imageUrl: graph3, title: 'Dashboard', desc: 'Future Series Forecasting'},
  ];

const devices = [
  { imageUrl: dev1, title: 'Device(Cognisense)', desc: 'Device working on live AC'},
  { imageUrl: dev2, title: 'Device(Cognisense)', desc: 'Device working on Motors'},
  { imageUrl: dev3, title: 'Device(Cognisense)', desc: 'Device display'},
]


const Offerings = () => {
  const [current, setCurrent] = useState('mail');
  const [selectedMode, setSelectedMode] = useState([...dashboards, ...devices]);
  const onClick = (e) => {
    setCurrent(e.key);
    if(e.key === 'all'){
      setSelectedMode([...dashboards, ...devices])
    } else if (e.key === 'dash') {
      setSelectedMode([...dashboards])
    } else {
      setSelectedMode([...devices])
    }
  };
  return (
    <div class="grid justify-items-center">

      <div className="justify-items-center my-10">
        <Menu style={{'border-bottom':'0px'}} className='text-sm pt-2 font-mono' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>

      <div className="lgl:mx-40 xs:mx-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      {selectedMode.map((image, index) => (
        <Roll left>
       

      <Card className="w-100"
        cover={
          <img
  src={image.imageUrl}
  class="h-72 max-w-sm object-cover rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  alt="" />
        }
      >
        <Meta
          title={image.title}
          description={image.desc}
        />

      </Card>
      </Roll>

      ))}
      </div>
    </div>
  );
};

export default Offerings;
