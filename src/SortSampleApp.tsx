import React from 'react'
import { useDnDSort } from './useDnDSort'

type Style<T extends HTMLElement> = React.HTMLAttributes<T>['style']

const bodyStyle: Style<HTMLDivElement> = {
  height: '100vh',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
}

const containerStyle: Style<HTMLDivElement> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '350px',
  maxHeight: '500px',
}

const imageCardStyle: Style<HTMLDivElement> = {
  cursor: 'grab',
  userSelect: 'none',
  width: '100px',
  height: '130px',
  overflow: 'hidden',
  borderRadius: '5px',
  margin: 3,
}

const imageStyle: Style<HTMLImageElement> = {
  pointerEvents: 'none',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}

const imageList: string[] = [
  'https://picsum.photos/id/1/300/300',
  'https://picsum.photos/id/2/300/300',
  'https://picsum.photos/id/3/300/300',
  'https://picsum.photos/id/4/300/300',
  'https://picsum.photos/id/5/300/300',
  'https://picsum.photos/id/6/300/300',
  'https://picsum.photos/id/7/300/300',
  'https://picsum.photos/id/8/300/300',
  'https://picsum.photos/id/9/300/300',
]

const SortSampleApp = () => {
  const results = useDnDSort(imageList)
  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        {results.map((item) => (
          <div key={item.key} style={imageCardStyle} {...item.events}>
            <img src={item.value} alt="ソート可能な画像" style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SortSampleApp
