"use client";

import { useEffect, useState } from "react";
import { FormContext, IndexContext } from "./contexts";
import Dashboard from "./dashboard";
import { Forms } from "@/functions/db";

function getItems(form: Forms) {
    const response = fetch("/api/admin/db/getall/" + form, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export default function DashboardPage() {
    const [index, setIndex] = useState(0);
    const [form, setForm] = useState(Forms.CONTACTING);

    const [itemsPromise, setItemsPromise] = useState(null);
    useEffect(() => {
        setItemsPromise(getItems(form));
    }, []);

    return (
        <IndexContext.Provider value={index}>
            <FormContext.Provider value={form}>
                <Dashboard promise={itemsPromise} />
            </FormContext.Provider>
        </IndexContext.Provider>
    );
}
