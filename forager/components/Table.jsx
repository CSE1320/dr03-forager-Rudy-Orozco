import React from 'react';

// Row Component for Input Table
const TableRow = ({ placeholder, category, defaultInput }) => {
    return (
        <tr>
            {/* Input Column with Icon */}
            <td className="w-1/3 px-4 py-2 text-center border-r border-[#203B5F]">
                <div className="relative flex items-center">
                    {/* Icon on the left */}
                    <img
                        src="/circle.svg"
                        alt="status icon"
                        className="absolute left-2"
                    />
                    <img
                        src="/circle_x.svg"
                        alt="status icon"
                        className="absolute left-3"
                    />
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full pl-8 pr-2 py-1 border-b border-[#203B5F] outline-none text-[16px] bg-transparent"
                    />
                </div>
            </td>
            
            {/* Category Column */}
            <td className="w-1/3 px-4 py-2 text-center border-r border-[#203B5F] whitespace-nowrap overflow-hidden text-ellipsis">
                {category}
            </td>

            {/* Default Input Column */}
            <td className="w-1/3 px-4 py-2 text-center">{defaultInput}</td>
        </tr>
    );
};



const Table = ({mushroom}) => {
    // Data Placeholder
    const rows = [
        { placeholder: 'Enter', category: 'Cap Shape', defaultInput: mushroom.CapShape },
        { placeholder: 'Enter', category: 'Cap Color', defaultInput: mushroom.CapColor },
        { placeholder: 'Enter', category: 'Cap Texture', defaultInput: mushroom.CapTexture },
        { placeholder: 'Enter', category: 'Gills Type', defaultInput: mushroom.GillsType },
        { placeholder: 'Enter', category: 'Gills Color', defaultInput: mushroom.GillsColor },
        { placeholder: 'Enter', category: 'Stem Shape', defaultInput: mushroom.StemShape },
        { placeholder: 'Enter', category: 'Stem Color', defaultInput: mushroom.StemColor },
        { placeholder: 'Enter', category: 'Stem Ring', defaultInput: mushroom.StemRing },
        { placeholder: 'Enter', category: 'Habitat', defaultInput: mushroom.Habitat },
    ];

    return (
        <table className="table-auto w-full max-w-3xl border-separate border-spacing-0 text-[16px]">
            <thead>
                <tr>
                    <th className="w-1/3 px-4 py-2 text-center border-r border-[#203B5F]"></th>
                    <th className="w-1/3 px-4 py-2 text-center border-r border-[#203B5F]"></th>
                    <th className="w-1/3 px-4 py-2 text-center"></th>
                </tr>
            </thead>
            <tbody>
                {/* Map each category to table */}
                {rows.map((row, index) => (
                    <TableRow
                        key={index}
                        placeholder={row.placeholder}
                        category={row.category}
                        defaultInput={row.defaultInput}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
