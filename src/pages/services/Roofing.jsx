import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'roofing')

export default function Roofing() {
  return <ServicePageLayout config={config} />
}
