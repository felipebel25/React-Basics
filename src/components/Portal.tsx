import { useState } from "react"
import { createPortal } from "react-dom"

export const Portal = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (

        <div>
            <button onClick={() => setIsModalOpened(!isModalOpened)}>toggle Modal</button>

            {isModalOpened &&
                <>
                    {createPortal(
                        <main style={{ border: '1px solid red', width: "30%", height: "80%", position: "absolute", top: "5%", left: '0px' }}>
                            <h1>MODAL with portal</h1>
                        </main>,
                        document.getElementById("root")!
                    )}
                </>
            }
        </div>
    )
}
