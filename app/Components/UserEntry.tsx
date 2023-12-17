export function UserEntry() {
    return (
        <div className="flex ">
            <div className="p-4">
                <label className="px-1" id='member-name'>Name</label>
                <input type="text" />
                <label className="px-1" id='member-email'>email</label>
                <input type="text" />
            </div>
        </div>
    )
}