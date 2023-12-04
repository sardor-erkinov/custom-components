import { useMemo } from 'react'
import './App.css'
import Table from "./components/table"

function App() {
  const tableItems = useMemo(() => [
    {
      "id": "O123OO",
      "name": "Gentra 1.5",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Yashil",
      "maxSpeed": "200 km/soat",
      "year": "2023yil",
      "distance": "2000 km"
    },
    {
      "id": "A456AA",
      "name": "Turbo X1",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Qora",
      "maxSpeed": "220 km/soat",
      "year": "2023yil",
      "distance": "1500 km"
    },
    {
      "id": "B789B2B",
      "name": "Luxury 3.0",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Oq",
      "maxSpeed": "250 km/soat",
      "year": "2023yil",
      "distance": "1800 km"
    },
    {
      "id": "T654TT4",
      "name": "Speedster GT",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Sariq",
      "maxSpeed": "230 km/soat",
      "year": "2023yil",
      "distance": "1200 km"
    },
    {
      "id": "O133O2O",
      "name": "Gentra 1.5",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Yashil",
      "maxSpeed": "200 km/soat",
      "year": "2023yil",
      "distance": "2000 km"
    },
    {
      "id": "A446AA",
      "name": "Turbo X1",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Qora",
      "maxSpeed": "220 km/soat",
      "year": "2023yil",
      "distance": "1500 km"
    },
    {
      "id": "B789BB",
      "name": "Luxury 3.0",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Oq",
      "maxSpeed": "250 km/soat",
      "year": "2023yil",
      "distance": "1800 km"
    },
    {
      "id": "C012CC",
      "name": "EcoDrive 2.2",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Ko'k",
      "maxSpeed": "180 km/soat",
      "year": "2023yil",
      "distance": "1200 km"
    },
    {
      "id": "D345DD",
      "name": "Rapid 4X4",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Qizil",
      "maxSpeed": "240 km/soat",
      "year": "2023yil",
      "distance": "2200 km"
    },
    {
      "id": "E678EE",
      "name": "CityMover",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Oq",
      "maxSpeed": "190 km/soat",
      "year": "2023yil",
      "distance": "1600 km"
    },
    {
      "id": "F910FF",
      "name": "Thunderbolt X",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Yashil",
      "maxSpeed": "210 km/soat",
      "year": "2023yil",
      "distance": "1900 km"
    },
    {
      "id": "G111GG",
      "name": "Sprint 1.8T",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZYJWanHQgTSz34MXBdyuiK-YZXp4XtLS5w&usqp=CAU",
      "color": "Qora",
      "maxSpeed": "230 km/soat",
      "year": "2023yil",
      "distance": "1400 km"
    }
  ]
    , [])

  return (
    <div className='container'>
      <Table>
        <Table.THead>
          <Table.Tr>
            <Table.Th >
              T/r
            </Table.Th>
            <Table.Th>
              Raqami
            </Table.Th>
            <Table.Th>
              Nomi
            </Table.Th>
            <Table.Th>
              Rasmi
            </Table.Th>
            <Table.Th>
              Rangi
            </Table.Th>
            <Table.Th>
              Maks. tezligi
            </Table.Th>
            <Table.Th>
              Yili
            </Table.Th>
            <Table.Th>
              Yurgan masofasi
            </Table.Th>
          </Table.Tr>
        </Table.THead>
        <Table.TBody>
          {tableItems.map((car, index) => (
            <Table.Tr key={car.id}>
              <Table.Td>
                {index + 1}
              </Table.Td>
              <Table.Td>
                {car.id}
              </Table.Td>
              <Table.Td>
                {car.name}
              </Table.Td>
              <Table.Td>
                <img className='car__table--photo' src={car.photo} alt={car.name} />
              </Table.Td>
              <Table.Td>
                {car.color}
              </Table.Td>
              <Table.Td>
                {car.maxSpeed}
              </Table.Td>
              <Table.Td>
                {car.year}
              </Table.Td>
              <Table.Td>
                {car.distance}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table>
    </div>
  )
}

export default App
