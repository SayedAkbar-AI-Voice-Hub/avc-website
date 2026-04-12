import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'cleaning')

export default function Cleaning() {
  return <ServicePageLayout config={config} />
}
