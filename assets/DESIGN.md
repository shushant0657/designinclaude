---
version: alpha
name: <Product>
description: <one line>
colors:
  primary: "#0F3D2E"
  on-primary: "#FFFFFF"
  background: "#FBF7F0"
  surface: "#FFFFFF"
  text: "#13231C"
  text-muted: "#5E6B64"
  accent: "#F2A33A"
  border: "#E6DDCF"
  success: "#1F7A4D"
  warning: "#B86E00"
  error: "#B3261E"
typography:
  display: { fontFamily: "Inter", fontSize: 40px, fontWeight: 700, lineHeight: 44px }
  h1: { fontFamily: "Inter", fontSize: 24px, fontWeight: 700, lineHeight: 30px }
  body: { fontFamily: "Inter", fontSize: 15px, fontWeight: 400, lineHeight: 22px }
  label: { fontFamily: "Inter", fontSize: 14px, fontWeight: 600, lineHeight: 20px }
rounded:
  button: 12px
  card: 16px
  sheet: 24px
  chip: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.label}", rounded: "{rounded.button}", height: 52px, padding: 16px }
  button-primary-pressed: { backgroundColor: "#0A2C21" }
  card: { backgroundColor: "{colors.surface}", rounded: "{rounded.card}", padding: 16px }
---

## Overview
<What the product is, who uses it, the 3 adjectives for how it should feel.>

## Colors
<Each colour's job, and what it must never be used for.>

## Typography
<Fonts, the scale, when to use each style.>

## Layout
<Grid, screen padding, spacing rhythm, navigation pattern.>

## Elevation & Depth
<Borders vs shadows and where each is used.>

## Shapes
<Corner radii and why.>

## Components
<For each core component: when to use, default variant, states.>

## Do's and Don'ts
- Do …
- Don't …
