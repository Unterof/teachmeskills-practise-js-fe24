import React from "react";
import { create } from "react-test-renderer"
import StatusField from "./StatusField";

describe("Profile status component",()=>{
    test('status from props should be in the state',()=>{
        const component = create(<StatusField status='it-kamasutra.com' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra.com')
    });
        test('after creation <span> will be displayed',()=>{
            const component = create(<StatusField status='it-kamasutra.com' />);
            const root = component.root;
            let span = root.findByType('span')
            expect(span).not.toBeNull()
        });
    test('after creation <input> will not be displayed',()=>{
        const component = create(<StatusField status='it-kamasutra.com' />);
        const root = component.root;

        expect( ()=>{
            let input = root.findByType('input')}).toThrow()
    })
})



