/**
 * Copyright (c) 2017 The Bacardi Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import IDLDefinition from './idl_definition';
import IDLEnum from './idl_enum';
import IDLInterface from './idl_interface';

export default class IDLDefinitionFactory {
  static create(raw_idl_definition_info: {}): IDLDefinition {
    if (this.isIDLInterface(raw_idl_definition_info)) {
      return new IDLInterface(raw_idl_definition_info);
    } else if (this.isIDLEnum(raw_idl_definition_info)) {
      return new IDLEnum(raw_idl_definition_info);
    }

    return null;
  }

  private static isIDLInterface(raw_idl_definition_info: {}): boolean {
    return raw_idl_definition_info['type'] == 'interface';
  }
  private static isIDLEnum(raw_idl_definition_info: {}): boolean {
    return raw_idl_definition_info['type'] == 'enum';
  }
}
