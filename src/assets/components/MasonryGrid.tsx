import React from 'react';

const mediaItems: MediaItemProps[][] = [
    [
        { type: 'image', src: '/static/memories/WaterFallSpring.jpg', alt: 'waterfallSpring' },
        { type: 'image', src: '/static/memories/Landscape.jpg', alt: 'landscape' },
        { type: 'video', src: '/static/memories/Birthday.mp4', alt: 'birthday' },
    ],
    [
        { type: 'image', src: '/static/memories/RevelstokeFall.jpg', alt: 'revelstokeFall' },
        { type: 'image', src: '/static/memories/ChristmasTree.jpg', alt: 'christmasTree' },
        { type: 'image', src: '/static/memories/NorthernLights.jpg', alt: 'northernLights' },
    ],
    [
        { type: 'video', src: '/static/memories/IceSkating.mp4', alt: 'iceSkating' },
        { type: 'image', src: '/static/memories/USAFamily.jpg', alt: 'usaFamily' },
        { type: 'video', src: '/static/memories/ColdPlunge.mp4', alt: 'coldPlunge' },
    ],
];

interface MediaItemProps {
    type: 'video' | 'image';
    src: string;
    alt: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ type, src, alt }) => {
    return type === 'video' ? (
        <video className="h-auto max-w-full rounded-lg" src={src} controls />
    ) : (
        <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
    );
};

const MasonryGrid = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-4/5 flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold mb-6 font-[SayanSans] [-webkit-text-stroke:0.5px_#47492e] text-[--secondary-color1] text-center">
                    Memories
                </h1>
                <div className="flex flex-row justify-center items-center w-full gap-6 [&>img:not(:first-child)]:mt-8">
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {mediaItems.map((group, index) => (
                            <div key={index} className="grid gap-3">
                                {group.map((item, idx) => (
                                    <MediaItem key={idx} type={item.type} src={item.src} alt={item.alt} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex-shrink-0 w-1/4">
                        <img className="h-auto w-full rounded-lg" src="/static/images/Family.png" alt="superFamily" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasonryGrid;
