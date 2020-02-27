﻿/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CodeModelAz } from "./CodeModelAz"

export function GenerateVendoredSdksInit(model: CodeModelAz) : string[] {
    var output: string[] = [];

    output.push("# coding=utf-8");
    output.push("# --------------------------------------------------------------------------");
    output.push("# Copyright (c) Microsoft Corporation. All rights reserved.");
    output.push("# Licensed under the MIT License. See License.txt in the project root for");
    output.push("# license information.");
    output.push("#");
    output.push("# Code generated by Microsoft (R) AutoRest Code Generator.");
    output.push("# Changes may cause incorrect behavior and will be lost if the code is");
    output.push("# regenerated.");
    output.push("# --------------------------------------------------------------------------");
    output.push("");
    output.push("__path__ = __import__('pkgutil').extend_path(__path__, __name__)");
    return output;
}
