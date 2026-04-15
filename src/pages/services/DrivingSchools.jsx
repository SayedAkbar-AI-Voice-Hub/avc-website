import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'driving-schools')

export default function DrivingSchools() {
  return <ServicePageLayout config={config} />
}
