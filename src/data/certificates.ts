import { Certificate } from '@/types';

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    date: '2023',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/',
    image: '/images/certificates/azure-solutions-architect.png'
  },
  {
    id: 'cert-2',
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2022',
    url: 'https://cloud.google.com/certification/cloud-architect',
    image: '/images/certificates/gcp-architect.png'
  },
  {
    id: 'cert-3',
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2021',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    image: '/images/certificates/aws-solutions-architect.png'
  },
  {
    id: 'cert-4',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022',
    url: 'https://www.cncf.io/certification/cka/',
    image: '/images/certificates/kubernetes-cka.png'
  }
];
