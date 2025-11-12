import { createRootRoute, Outlet } from "@tanstack/react-router";

export const RootComponent = () => {
    return <Outlet />
}

export const Route = createRootRoute({
    component: RootComponent
})

