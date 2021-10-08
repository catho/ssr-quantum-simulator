import React from 'react';
import dynamic from 'next/dynamic'

const mockComplete = [
    {
        name: 'Jan',
        value: 4000,
        tooltip: 'R$ 4000',
    },
    {
        name: 'Fev',
        value: 1398,
        tooltip: 'R$ 1398',
    },
    {
        name: 'Mar',
        value: 9800,
        tooltip: 'R$ 9800',
    },
    {
        name: 'Abr',
        value: 3908,
        tooltip: 'R$ 3908',
    },
    {
        name: 'Mai',
        value: 4800,
        tooltip: 'R$ 4800',
    },
    {
        name: 'Jun',
        value: 3800,
        tooltip: 'R$ 3800',
    },
    {
        name: 'Jul',
        value: 4300,
        tooltip: 'R$ 4300',
    },
    {
        name: 'Ago',
        value: 2400,
        tooltip: 'R$ 2400',
    },
    {
        name: 'Set',
        value: 1398,
        tooltip: 'R$ 1398',
    },
    {
        name: 'Out',
        value: 9800,
        tooltip: 'R$ 9800',
    },
    {
        name: 'Nov',
        value: 3908,
        tooltip: 'R$ 3908',
    },
    {
        name: 'Dez',
        value: 4800,
        tooltip: 'R$ 4800',
    },
];

const BarChart = dynamic(
    () => import('@catho-private/catho-components/BarChart'),
    { ssr: false }
)

const BarChartExample = () => <BarChart data={mockComplete} />

export default BarChartExample;