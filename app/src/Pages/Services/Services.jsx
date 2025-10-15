import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import './Services.css'
import serviceimage from '../../assets/Images/services.jpg'
import bannerimage from '../../assets/Images/banner-small.jpg'
import insuranceimage from '../../assets/Images/insurance-images.png'
import Banner from '../../Components/Banner/Banner'
import { useState } from 'react'

function Services() {

  const injuryData = {
    back: {
      title: 'Back Injuries',
      items: [
        {
          name: 'Herniated Disk',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Fractured Vertebrae',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Spinal Stenosis',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Spondylolisthesis',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        }
      ]
    },
    foot_ankle: {
      title: 'Foot & Ankle',
      items: [
        {
          name: 'Plantar Fasciitis',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Metatarsal Fractures',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Stress Fractures',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Heel Spurs',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        }
      ]
    },
    Knee: {
      title: 'Knee',
      items: [
        {
          name: 'ACL Tears',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'PCL Tears',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'LCL Tears',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Meniscus Tears',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        }
      ]
    },
    hand: {
      title: 'Hand',
      items: [
        {
          name: 'Fractures',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Sprains',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Lacerations',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Dislocations',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        }
      ]
    },
    neck: {
      title: 'Neck',
      items: [
        {
          name: 'Cervical Whiplash',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Spondylolisthesis',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Spinal Cord Injuries',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        },
        {
          name: 'Cervical Stenosis',
          what: 'The soft inner core of a spinal disc bulges out, irritating nearby nerves.',
          focus: 'Core stabilization, traction therapy, posture training, nerve gliding exercises.'
        }
      ]
    }
  }

  const [selected, setSelected] = useState('back')

  const data = injuryData[selected]


  return (
    <div>
      <Hero
        title={'Our Services'}
        image={serviceimage}
      />

      <div className='services-sect'>
        <div className='container'>
          <div className='injury'>
            <div className='inj-menu'>
              {Object.keys(injuryData).map((key) => (
                <label
                key={key}
                onClick={() => setSelected(key)}
                className={selected === key ? 'active' : ""}
                >
                {injuryData[key].title.replace('Injuries', "")}
                </label>
              ))}
            </div>

            <div className='inj-det'>
              <h1>{data.title}</h1>

              <div className='inj-boxes'>
                {data.items.map((item, index) => (
                  <div className='box' key={index}>
                    <label>{item.name}</label>
                    <hr />
                    <div className='box-txt'>
                      <p><strong>What is it?</strong></p>
                      <p>{item.what}</p>
                      <br />
                      <p><strong>PT Focus</strong></p>
                      <p>{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className='partners'>
            <div className='text'>
              <h1>Insurance Partners</h1>
              <hr />
            </div>

            <div className='boxes'>
              <img src={insuranceimage} alt="list of insurances" />
            </div>
          </div>

          <Banner
            text={'Let us help you get back to doing what you love.'}
            btntext={'Contact Us'}
            image={bannerimage}
            imgalt={'instructor helping patient'}
          />

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Services;
