# 🕐 Apple Watch–Style Homescreen (React + Framer Motion)

A fully interactive **Apple Watch–like homescreen grid** built using **React**, **TypeScript**, and **Framer Motion**.
Each icon dynamically scales and fades based on distance from the drag position, creating a realistic “bubbly” watchOS effect.



## 💡 Core Idea

Apple’s watchOS homescreen arranges icons in a **hexagonal grid** that moves fluidly under your finger.
This project replicates that behavior using:

- Mathematical grid generation (controlled spacing + staggered rows)
- MotionValue-based drag physics
- Dynamic transforms via `useTransform`
- Declarative animation using Framer Motion’s `motion.div`



## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| UI | **React + TypeScript** | Component-based structure |
| Motion | **Framer Motion (motion/react)** | Smooth dragging, scale, opacity transforms |
| Styling | **Tailwind CSS** | Fast, utility-first design system |
| State | **MotionValue hooks** | Reactive animation data |
| Assets | Local PNGs | Icon visualization |
| Build | Vite / Next.js | Modern bundling + HMR |



## 🧩 Folder Structure

```
src/
├── App.tsx
├── components/
│ ├── IconGrid.tsx
│ ├── IconCircle.tsx
├── config/
│ ├── gridConfig.ts
│ ├── icons.ts
├── hooks/
│ ├── useImagesLoaded.ts
├── utils/
│ ├── generateCircles.ts
```



## 🧮 Grid Generation Logic

`generateCircles()` computes coordinates for each icon using offset rows (like a honeycomb):

```ts
const  y  =  -totalHeight /  2  + row * spacingY;
const  x  = rowStartX + col * spacingX;
```

Even rows have `cols` icons; odd rows have `cols - 1`.
Edge rows are trimmed to simulate curvature.



## ⚡ Motion System

```ts
const  x  =  useMotionValue(0);
const  y  =  useMotionValue(0);
```  

Each icon reacts through **derived transforms**:
```ts
const  distance  =  useTransform([x, y], (values) => {
	const [latestX, latestY] = values;
	const  dx  =  -latestX - circleX;
	const  dy  =  -latestY - circleY;
	return  Math.sqrt(dx **  2  *  0.06  + dy **  2  *  0.02);
});
```

This allows per-icon scaling and opacity updates without re-rendering the React tree.



## 🕓 Image Preloading

All icons are preloaded via the custom `useImagesLoaded()` hook before rendering:

```ts
const  allLoaded  =  useImagesLoaded(icons);
```

  

## 🚀 Running Locally

```bash
git  clone  https://github.com/your-username/apple-watch-homescreen.git
cd  apple-watch-homescreen
npm  install
npm  run  dev
```

Then open `http://localhost:5173/`.

  

## 🧰 Developer Notes

- Stateless animation (MotionValues)
- Declarative transforms
- Functional grid math
- Composable architecture

  

## 🧪 Future Enhancements

- Dynamic zoom
- App-launch animation
- 3D parallax
- GPU-accelerated filters



## 🧑‍💻 Author

**Haris Amjad**
Software Engineer • Full Stack Developer • UI/UX Designer
[LinkedIn](https://www.linkedin.com/in/harisamjad-pro/) | [GitHub](https://github.com/harisamjad-pro/)



## 🪩 License

MIT License © 2025 Haris Amjad