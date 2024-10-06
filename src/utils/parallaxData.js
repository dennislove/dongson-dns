export const createParallaxData = (endValue, startScale) => [
  
    {
      start: 0,
      end: endValue,
      properties: [
        {
          startValue: startScale,
          endValue: 1,
          property: "scale",
        },
      ],
    },
];
  
export const createParallaxDataCollage = (endValue, startScale) => [
  
    {
      start: 0,
      end: endValue,
      properties: [
        {
            startValue: startScale,
            endValue: 0,
                property: "translateX",
            },
            {
              startValue: 0,
              endValue: 1,
                  property: "opacity",
            },
      ],
    },
  ];